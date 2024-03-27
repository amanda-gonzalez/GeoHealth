import React, { useCallback } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { useJsApiLoader, GoogleMap, Marker, DirectionsRenderer, InfoWindow } from '@react-google-maps/api';
import { useState, useRef, useEffect } from 'react';
import './app.css';

const Background = styled.div`
    background-color: #A4E7F5;
    display: flex;
    height: 90vh;
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

    /** @type React.MutableRefObject<HTMLInputElement> */
    const sourceRef = useRef();
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destinationRef = useRef();
    /** @type React.MutableRefObject<HTMLInputElement> */
    const mapRef = useRef();

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
            </Background>
            </div>
    )
}
export default Map;