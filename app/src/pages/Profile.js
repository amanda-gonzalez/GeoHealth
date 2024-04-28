import React, {useState, useEffect} from "react";
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

function getArticles(){
    let popInfoItems = document.getElementById('popInfoItems');
    popInfoItems.innerHTML = '';
    var archive = [],
        keys = Object.keys(localStorage),
        i = 0, key;

    for (; key = keys[i]; i++) {
        let data = [];
        data.push(key);
        data.push(localStorage.getItem(key));
        archive.push(data);
    }

    openPop();
    
    for(let i = 0; i < archive.length; i++){
        if(archive[i][0] == 'insurance'){
            continue;
        }else{
            var temp = document.createElement('a');
            temp.innerText = archive[i][0];
            temp.href = archive[i][1];
            popInfoItems.appendChild(temp);
            popInfoItems.innerHTML += '<br/>';
        }
    }
}

function openPop(){
    document.querySelector('.bi-x-lg').style.display = 'block';
    document.getElementById('popInfo').style.display = 'block';
    document.getElementById('articlePopUp').style.display = 'block';
}

function closePop(){
    document.querySelector('.bi-x-lg').style.display = 'none';
    document.getElementById('popInfo').style.display = 'none';
    document.getElementById('articlePopUp').style.display = 'none';
}

function saveInsurance(){
    let input = document.getElementById('insuranceInput').value;
    localStorage.setItem('insurance', input);
    setInsurance();
}

function setInsurance(){
    let ins = document.getElementById('userInsurance');
    if(localStorage.getItem('insurance') != null){
        document.getElementById('insuranceInput').style.display = 'none';
        document.getElementById('insuranceBtn').style.display = 'none';
        ins.style.display = 'block';
        ins.innerText = localStorage.getItem('insurance');
    }else{
        document.getElementById('insuranceInput').style.display = 'inline-block';
        document.getElementById('insuranceBtn').style.display = 'inline-block';
        ins.style.display = 'none';
    } 
}


//window.addEventListener('load', setInsurance);

const Profile = () =>{
    useEffect(() => {
        setInsurance();
    }, []);
    return(
    <div id="profilepage">
        <Navbar/>
        <div id="popInfo">
            <svg onClick={closePop} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
            <div id="popInfoItems"></div>
        </div>
        <div id="articlePopUp">
            
        </div>
        <div id="PmainArea">
            <div id="personalSection">
                <h3>E-mail</h3>
                <p>admin@email.com</p>
                <hr/>
                <h3>Insurance Type</h3>
                <input type="text" id="insuranceInput"></input>
                <button type="button" id="insuranceBtn" onClick={saveInsurance}>Save</button>
                <p id="userInsurance"></p>
                <hr/>
                <h3>Saved Articles</h3>
                <a href="#" onClick={getArticles} id="articleLink">View your saved articles here</a>
                <hr/>
                <h3>Other</h3>
                <p>The GeoHealth team is working to release telehealth and mental health options soon!</p>
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