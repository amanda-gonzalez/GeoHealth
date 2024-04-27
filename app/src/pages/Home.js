import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import img1 from "../images/home-img1.png";
import img2 from "../images/home-img2.png";
import VoiceflowChatWidget from '../components/VoiceflowChat';

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
                <div id="chatbox">
                    <VoiceflowChatWidget
                        projectID="662888cbc521a4ddc69d9e79"
                        url="https://general-runtime.voiceflow.com"
                        versionID="production"
                    />
                </div>
            </div>
        </div>
    )
}
export default Home;