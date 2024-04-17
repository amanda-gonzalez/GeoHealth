import React, {useState} from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import {Link} from "react-router-dom";
import axios from "axios";
import img1 from "../images/rsrc-img1.png";
import img2 from "../images/rsrc-img2.png";
import img3 from "../images/rsrc-img3.png";
import img4 from "../images/rsrc-img4.png";

import './app.css';

async function getNews(){
    let url = 'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=5bd91f9ebe9940b0ade85896ec4d9843';
    let response = await fetch(url);
    if(response.ok){
        let json = await response.json();
        //console.log(json);
        parseNews(json);
    }else{
        console.log('Error: ', response.status);
    }
}

let articles = [];
function parseNews(data){
    articles = [];
    let single = [];
    for(let i = 0; i < 4; i++){
        single.push(data.articles[i].source.name);
        if(data.articles[i].author == null){
            single.push(data.articles[i].source.name);
        }else{
            single.push(data.articles[i].author);
        }
        single.push(data.articles[i].title);
        single.push(data.articles[i].url);
        single.push(data.articles[i].urlToImage);
        articles.push(single);
        single = [];
    }
    displayNews(articles);
}

function displayNews(articles){
    let sources = document.querySelectorAll('.rSource');
    let authors = document.querySelectorAll('.rAuthor');
    let links = document.querySelectorAll('.rLink');
    let images = document.querySelectorAll('.rInnerImg');
    for(let i = 0; i < 4; i++){
        sources[i].innerText = articles[i][0];
        authors[i].innerText = articles[i][1];
        links[i].innerText = articles[i][2];
        links[i].href = articles[i][3];
        images[i].src = articles[i][4];
    }
}

//window.addEventListener('load', getNews);

const Resources = () =>{
    getNews();
    return(
    <div id="resources">
        <Navbar/>
        <div id="rmainArea">
            <div class="artBox">
                <div id="resourceMedia">
                    <div class="rImg">
                        <img class="rInnerImg" src={img1}></img>
                    </div>
                    <div id="contentBox">
                        <div id="content">
                            <h3 class="rSource">Article Topic: COVID-19</h3>
                            <a class="rLink" href="https://www.nyc.gov/site/doh/covid/covid-19-main.page" target="_blank">Article Title: What You Need to Know About Covid 19 Now</a>
                            <p class="rAuthor">Article Author: NYC Department of Health</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="artBox">
                <div id="resourceMedia">
                    <div class="rImg">
                        <img class="rInnerImg" src={img2}></img>
                    </div>
                    <div id="contentBox">
                        <div id="content">
                            <h3 class="rSource">Article Topic: Nutrition</h3>
                            <a class="rLink" href="https://www.medicalnewstoday.com/articles/are-plant-based-meat-substitutes-really-better-for-the-heart-than-meat-options" target="_blank">Article Title: Are plant-based meat substitutes really better for the heart than meat options?</a>
                            <p class="rAuthor">Article Author: Paul Ian Cross Ph.D.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="artBox">
                <div id="resourceMedia">
                    <div class="rImg">
                        <img class="rInnerImg" src={img3}></img>
                    </div>
                    <div id="contentBox">
                        <div id="content">
                            <h3 class="rSource">Article Topic: Gut Health</h3>
                            <a class="rLink" href="https://www.medicalnewstoday.com/articles/in-conversation-what-do-we-know-about-the-gut-microbiome-in-ibd" target="_blank">Article Title: In Conversation: What do we know about the gut microbiome in IBD?</a>
                            <p class="rAuthor">Article Author:  Maria Cohut Ph.D.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="artBox">
                <div id="resourceMedia">
                    <div class="rImg">
                        <img class="rInnerImg" src={img4}></img>
                    </div>
                    <div id="contentBox">
                        <div id="content">
                            <h3 class="rSource">Article Topic: Health Insurance</h3>
                            <a class="rLink" href="https://www.nyc.gov/site/doh/health/health-topics/health-insurance.page" target="_blank">Article Title: Health Insurance: Enrollment Counselors</a>
                            <p class="rAuthor">Article Author: NYC Department of Health</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Resources;