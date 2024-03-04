import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { useJsApiLoader, GoogleMap, Marker, Autocomplete } from '@react-google-maps/api';
import { useState } from 'react';

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

    const getUserLocation = () => {
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

    if (!isLoaded) {
        return <div>Loading Map</div>;
    }

    console.log(userLocation);

    return (
        <div>
            <Navbar/>
            <Background>
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={10}
                    center={userLocation}
                    options = {{
                        streetViewControl: false,
                        mapTypeControl: false
                    }}
                    onLoad = {getUserLocation}
                >
                    <Marker position={userLocation} />
                </GoogleMap>
            </Background>
        </div>
    )
}
export default Map;