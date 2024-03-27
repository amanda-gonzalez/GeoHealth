import React, {useState} from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import {Link} from "react-router-dom";
import axios from "axios";

import './app.css';

const Profile = () =>{
    return(
    <div id="profilepage">
        <Navbar/>
        <div id="PmainArea">
            <div id="personalSection"></div>
            <div id="techSection"></div>
        </div>
    </div>
    )
}

export default Profile;