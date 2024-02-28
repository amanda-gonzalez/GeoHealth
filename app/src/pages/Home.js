import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";


const Background = styled.div`
    background-color: #A4E7F5;
    display: flex;
    height: 90vh;
`;

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Background/>
        </div>
    )
}
export default Home;