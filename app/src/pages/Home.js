import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import img1 from "../images/home-img1.png";
import img2 from "../images/home-img2.png";
import { BubbleChat } from 'flowise-embed-react';

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
                        <img src={img1}></img>
                    </div>
                    <div class="hImg">
                    <img src={img2}></img>
                    </div>
                </div>
                <BubbleChat chatflowid="af016c09-8a9d-41e6-a554-dda4d48f2e72" apiHost="http://localhost:4050" />
                
            </div>
        </div>
    )
}
export default Home;