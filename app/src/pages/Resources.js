import React, {useState, useEffect} from "react";
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
    let numarticles = 4;
    for(let i = 0; i < numarticles; i++){
        if(data.articles[i].source.name == '[Removed]' || data.articles[i].urlToImage == null){
            data.articles[i] = data.articles[data.articles.length - 1];
            data.articles.pop();
        }
        single.push(data.articles[i].source.name);
        if(data.articles[i].author == null){
            single.push(data.articles[i].source.name);
        }else{
            single.push(data.articles[i].author);
        }
        single.push(data.articles[i].title);
        single.push(data.articles[i].url);
        single.push(data.articles[i].urlToImage);
        console.log(single);
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
    //console.log(articles);
    for(let i = 0; i < 4; i++){
        sources[i].innerText = articles[i][0];
        authors[i].innerText = articles[i][1];
        links[i].innerText = articles[i][2];
        links[i].href = articles[i][3];
        images[i].src = articles[i][4];
    }
}

window.addEventListener('load', saveFunction);

function saveFunction(){
    let stars = document.querySelectorAll('.bi-star');
    for(let i = 0; i < stars.length; i++){
        stars[i].addEventListener('click', (event) => {
            if(stars[i].classList.contains('fillstar')){
                stars[i].classList.remove('fillstar')
                stars[i].innerHTML = '<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>';
                removeResource(event.currentTarget.parentNode.parentNode);
            }else{
                stars[i].classList.add('fillstar');
                stars[i].innerHTML = '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>';
                saveResource(event.currentTarget.parentNode.parentNode);
            }
        });    
    }
}

function saveResource(r){
    let link = r.childNodes[1].querySelector('.rLink').href;
    let title = r.childNodes[1].querySelector('.rLink').innerText;
    console.log(title, link);
    localStorage.setItem(title, link);
}

function removeResource(r){
    let title = r.childNodes[1].querySelector('.rLink').innerText;
    localStorage.removeItem(title);
}

const Resources = () =>{
    useEffect(() => {
        saveFunction();
        getNews();
    }, []);
    return(
    <div id="resources">
        <Navbar/>
        <div id="rmainArea">
            <div class="artBox">
                <div id="resourceMedia">
                    <div class="rImg">
                        <img class="rInnerImg"></img><br/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                        </svg>
                    </div>
                    <div id="contentBox">
                        <div id="content">
                            <h3 class="rSource"></h3>
                            <a class="rLink" href="https://www.nyc.gov/site/doh/covid/covid-19-main.page" target="_blank"></a>
                            <p class="rAuthor"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="artBox">
                <div id="resourceMedia">
                    <div class="rImg">
                        <img class="rInnerImg"></img>
                        <br/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                        </svg>
                    </div>
                    <div id="contentBox">
                        <div id="content">
                            <h3 class="rSource"></h3>
                            <a class="rLink" href="https://www.medicalnewstoday.com/articles/are-plant-based-meat-substitutes-really-better-for-the-heart-than-meat-options" target="_blank"></a>
                            <p class="rAuthor"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="artBox">
                <div id="resourceMedia">
                    <div class="rImg">
                        <img class="rInnerImg"></img><br/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                        </svg>
                    </div>
                    <div id="contentBox">
                        <div id="content">
                            <h3 class="rSource"></h3>
                            <a class="rLink" href="https://www.medicalnewstoday.com/articles/in-conversation-what-do-we-know-about-the-gut-microbiome-in-ibd" target="_blank"></a>
                            <p class="rAuthor"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="artBox">
                <div id="resourceMedia">
                    <div class="rImg">
                        <img class="rInnerImg"></img><br/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                        </svg>
                    </div>
                    <div id="contentBox">
                        <div id="content">
                            <h3 class="rSource"></h3>
                            <a class="rLink" href="https://www.nyc.gov/site/doh/health/health-topics/health-insurance.page" target="_blank"></a>
                            <p class="rAuthor"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Resources;