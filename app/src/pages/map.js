import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer } from '@react-google-maps/api';
import { useState, useRef } from 'react';

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

    /** @type React.MutableRefObject<HTMLInputElement> */
    const sourceRef = useRef();
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destinationRef = useRef();


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

    function loadMap(mapInstance) {
        setMap(mapInstance)
        getUserLocation();
    }

    if (!isLoaded) {
        return <div>Loading Map</div>;
    }
    
    async function calculateRoute() {
        if (sourceRef.current.value === '' || destinationRef.current.value === '') {
            return;
        }
        const directionsService = new window.google.maps.DirectionsService();
        const result = await directionsService.route({
            origin: sourceRef.current.value,
            destination: destinationRef.current.value,
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
        sourceRef.current.value = '';
        destinationRef.current.value = '';
    }

    return (
        <div id="map">
            <Navbar/>
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={15}
                    center={userLocation}
                    options = {{
                        streetViewControl: false,
                        mapTypeControl: false
                    }}
                    onLoad = {loadMap}
                >
                    <Marker position={userLocation} />
                    {directionsResponse && <DirectionsRenderer directions={directionsResponse}/>}
                </GoogleMap>

                <div>
                    <Autocomplete>
                        <input
                            type="text"
                            placeholder="Source"
                            ref={sourceRef}
                        />
                    </Autocomplete>
                    <Autocomplete>
                    <input
                        type="text"
                        placeholder="Destination"
                        ref={destinationRef}
                    />
                    </Autocomplete>
                    <button type='submit' onClick={calculateRoute}>
                        Calculate Route
                    </button>
                    <button aria-label='center back' onClick={clearRoute}>
                        Clear Route
                    </button> 
                    <button onClick={()=>map.panTo(userLocation)}>
                        Center
                    </button>
                </div>
        </div>
    )
}
export default Map;