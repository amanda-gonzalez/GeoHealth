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