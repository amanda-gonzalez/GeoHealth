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
                <h3>View Code</h3>
                <p>.......</p>
                <hr/>
                <h3>API Docs</h3>
                <p>.......</p>
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