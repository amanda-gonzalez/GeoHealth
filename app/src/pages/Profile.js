import React, {useState} from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import {Link} from "react-router-dom";
import axios from "axios";

import './app.css';

function copytoclipboard(e) {
    e.preventDefault();
    navigator.clipboard.writeText('http://localhost:3000/');

    // Alert the copied text
    alert("Link copied!");
}

const Profile = () =>{
    return(
    <div id="profilepage">
        <Navbar/>
        <div id="PmainArea">
            <div id="personalSection">
                <h3>E-mail</h3>
                <p>**input email</p>
                <hr/>
                <h3>Insurance Type</h3>
                <p>info...</p>
                <hr/>
                <h3>Other</h3>
                <p>other..</p>
            </div>
            <div id="techSection">
                <div class="shareheading">
                    <h3>View Code</h3>
                    <a href="https://github.com/amanda-gonzalez/GeoHealth" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                            <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                        </svg>
                    </a>
                </div>
                <p>GeoHealth Github repository</p>
                <hr/>
                <div class="shareheading">
                    <h3>API Docs</h3>
                    <a href="https://developers.google.com/maps/documentation/javascript" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                            <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                        </svg>
                    </a>
                </div>
                <p>Google Maps API documentation</p>
                <hr/>
                <h3>Share</h3>
                <p>share GeoHealth with others!</p>
                <button type="button" id="sharebtn" onClick={copytoclipboard}>Share</button>
            </div>
        </div>
    </div>
    )
}

export default Profile;