import React, {useState} from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import {Link} from "react-router-dom";
import axios from "axios";
import './app.css';

const Profile = () =>{
    const [currentUser, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    currentUser.name = 
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
            <div id="techSection"></div>
        </div>
    </div>
    )
}

export default Profile;