import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const Background = styled.div`
    background-color: #A4E7F5;
    display: flex;
    height: 90vh;
`;

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
    lat: 40.694340, // default latitude
    lng: -73.986110, // default longitude
  };

const Map = () => {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsAPI: 'AIzaSyDjS_SKB2EhV_PEh4nS_v-NkwJsLoerwOs',
        libraries,
    });

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading maps</div>;
    }

    return (
        <div>
            <Navbar/>
            <Background/>
            <div>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}
            >
                <Marker position={center} />
            </GoogleMap>
            </div>
        </div>
    )
}
export default Map;