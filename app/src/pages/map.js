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

const center = {
    lat: 40.694340, // default latitude
    lng: -73.986110, // default longitude
  };

const Map = () => {
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries
    });

    const [map, setMap] = useState(/** @type google.maps.Map */ (null));

    if (!isLoaded) {
        return <div>Loading Map</div>;
    }

    console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY); // Temporary check

    return (
        <div>
            <Navbar/>
            <Background>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}
                onLoad = {map => setMap(map)}
            >
                <Marker position={center} />
            </GoogleMap>
            </Background>
        </div>
    )
}
export default Map;