import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";

import './app.css';



const Home = () => {
    return (
        <div id="home">
            <Navbar/>
            <div id="HmainArea">
                <div id="mission">
                    <h3>Mission Statement</h3>
                    <p> Provide wide scale public health information catered to users’ local area improving community health efforts and elevate business outreach.</p>
                </div>
                <div id="homeMedia">
                    <div class="hImg">
                        <img></img>
                    </div>
                    <div class="hImg">
                        <img></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;