import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";

import './app.css';



const Home = () => {
    return (
        <div id="home">
            <Navbar/>
            <div id="mainArea">
                <div id="mission">
                    <p>Mission Statement</p>
                </div>
            </div>
        </div>
    )
}
export default Home;