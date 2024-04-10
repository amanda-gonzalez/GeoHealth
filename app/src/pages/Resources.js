import React, {useState} from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import {Link} from "react-router-dom";
import axios from "axios";

import './app.css';

const Resources = () =>{
    return(
    <div id="resources">
        <Navbar/>
        <div id="mainArea">
            <div id="artBox">
                <div id="contentBox">
                    <div id="content">
                        <h3>Article Topic blah blah blah blah</h3>
                        <p>Article Title... </p>
                    </div>
                </div>
            </div>
            <div id="resourceMedia">
                <div class="rArticle">
                    <img></img>
                </div>
                <div class="rArticle">
                    <img></img>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Resources;