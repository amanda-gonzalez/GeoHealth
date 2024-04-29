import React, { useCallback } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { useJsApiLoader, GoogleMap, Marker, DirectionsRenderer, InfoWindow, Autocomplete } from '@react-google-maps/api';
import { useState, useRef, useEffect } from 'react';
import { Box, ButtonGroup } from '@chakra-ui/react';
import { FaTimes } from 'react-icons/fa';
import { BubbleChat } from 'flowise-embed-react';
import './app.css';

import markerIcon from '../images/icons8-heart-with-pulse-48.png'

const Background = styled.div`
    background-color: #A4E7F5;
    display: flex;
    height: 100vh;
    width: 100vw;
    position: relative;
`;


const FloatingSearchBar = styled.div`
    position: absolute;
    top: 10px;
    right: 120px; 
    width: 50%;
    z-index: 5;  
    display: flex;
    justify-content: center;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 8px;
`;

const SearchInput = styled.input`
    flex: 1 1 auto;
    width: 90%;
    padding: 10px;
    margin-right: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const SearchButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

const ClearButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: red;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
`;


const libraries = ['places'];

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const Map = () => {
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries
    });

    const [map, setMap] = useState(/** @type google.maps.Map */ (null));
    const [userLocation, setUserLocation] = useState(null);
    const [directionsResponse, setDirectionsResponse] = useState(null);
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');
    const [places, setPlaces] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [query, setQuery] = useState('');

    /** @type React.MutableRefObject<HTMLInputElement> */
    const mapRef = useRef();
    const inputRef = useRef();
    const autocompleteRef = useRef();

    const getUserLocation = async () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setUserLocation({ lat: latitude, lng: longitude });
            },
            (error) => {
              console.error('Error getting location: ', error);
            }
          );
        } else {
          console.log('Geolocation not supported');
        }
    };

    //autocomplete
    const onLoad = (autocomplete) => {
        autocompleteRef.current = autocomplete;
    };

    const onPlaceChanged = () => {
        if (autocompleteRef.current !== null) {
            const place = autocompleteRef.current.getPlace();
            if (place.geometry) {
                setPlaces([place]);  // Assuming you want to handle multiple places
                mapRef.current.fitBounds(place.geometry.viewport);
            } else {
                console.log("No details available for input: '" + place.name + "'");
            }
        }
    };

    //search nearby places of interest
    const searchPlaces = () => {
        const service = new window.google.maps.places.PlacesService(mapRef.current);
        const request = {
            location: userLocation,
            radius: '2500',
            type: ['hospital']
        };
        service.nearbySearch(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
                setPlaces(results);
            }
        })
    }

    //input search
    const handleSearch = () => {
        const service = new window.google.maps.places.PlacesService(mapRef.current);
        const request = {
            query,
            fields: ['name', 'geometry'],
        };
        service.findPlaceFromQuery(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
                setPlaces(results);
                mapRef.current.fitBounds(results[0].geometry.viewport);
            }
        });
    };

    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
        setMap(map);
        getUserLocation();
    }, [])

    useEffect(() => {
        if (userLocation) {
            searchPlaces();
        }
    }, [userLocation])

    if (!isLoaded) {
        return <div>Loading Map</div>;
    }
    
    async function calculateRoute() {
        if (!userLocation || !selectedPlace) {
            return;
        }
        const directionsService = new window.google.maps.DirectionsService();
        const result = await directionsService.route({
            origin: { lat: userLocation.lat, lng: userLocation.lng },
            destination: { 
                lat: selectedPlace.geometry.location.lat(), 
                lng: selectedPlace.geometry.location.lng() },
            travelMode: window.google.maps.TravelMode.DRIVING
        })
        setDirectionsResponse(result);
        setDistance(result.routes[0].legs[0].distance.text);
        setDuration(result.routes[0].legs[0].duration.text);
    }

    function clearRoute() {
        setDirectionsResponse(null);
        setDistance('')
        setDuration('')
    }

    function handleSelectedPlace(place) {
        clearRoute();
        setSelectedPlace(place);
    }

    function clearPlace() {
        clearRoute();
        setSelectedPlace(null);
    }

    function clearSearch() {
        setQuery('');
        setPlaces([]);
        searchPlaces();
    };

    return (
        <div id="map">
            <Navbar/>
            <Background>
                <div style={{ display: 'flex', height: '100vh', width: '60vh' }}>
                    <div style={{ flex: 1, overflowY: 'auto', padding: '10px' }}>
                        {places.map((place, index)=>(
                            <div key={index} className="placeButton" onClick={() => handleSelectedPlace(place)}>
                                <h3>{place.name}</h3>
                                <p>{place.vicinity}</p>
                                {selectedPlace && selectedPlace.place_id === place.place_id && (
                                    <>
                                        <button onClick={calculateRoute}>Direction</button>
                                        <p>{distance}</p>
                                        <p>{duration}</p>
                                    </>  
                                )}
                                {directionsResponse && <DirectionsRenderer directions={directionsResponse}/>}
                            </div>
                        ))}
                    </div>
                </div>

                <FloatingSearchBar>
                    <Box flexGrow={1}>
                        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                            <SearchInput ref={inputRef} value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search places" />
                        </Autocomplete>
                    </Box>
                    
                    <ButtonGroup>
                        <SearchButton onClick={handleSearch}>Search</SearchButton>
                        <ClearButton onClick={clearSearch}><FaTimes /></ClearButton>
                    </ButtonGroup>
                 </FloatingSearchBar>

                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={15}
                    center={userLocation}
                    options = {{
                        streetViewControl: false,
                        mapTypeControl: false
                    }}
                    onLoad = {onMapLoad}
                >
                    <div className="floating-buttons">
                        <button aria-label='center back' onClick={clearRoute}>
                            Clear Route
                        </button> 
                        <button onClick={()=>map.panTo(userLocation)}>
                            Center
                        </button>
                    </div>
                    <Marker 
                        position={userLocation} 
                        animation={window.google.maps.Animation.DROP}
                    />
                    {directionsResponse && <DirectionsRenderer directions={directionsResponse}/>}
                    {places.map((place) => (
                        <Marker
                            key={place.place_id}
                            position={{ lat:place.geometry.location.lat(), lng:place.geometry.location.lng() }}
                            onClick={() => setSelectedPlace(place)}
                            icon={ markerIcon }
                        />

                    ))}
                    {selectedPlace && (
                        <InfoWindow 
                            position={{
                                lat:selectedPlace.geometry.location.lat(),
                                lng:selectedPlace.geometry.location.lng()
                            }}
                            onCloseClick={() => clearPlace()}
                        >
                            <div>
                                <h2>{selectedPlace.name}</h2>
                                <p>{selectedPlace.vicinity}</p>
                                <p>{distance}</p>
                                <p>{duration}</p>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
                <BubbleChat chatflowid="af016c09-8a9d-41e6-a554-dda4d48f2e72" apiHost="http://localhost:4050" />
            </Background>
            </div>
    )
}
export default Map;