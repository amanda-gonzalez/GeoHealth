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

const Resources = () =>{
    return(
    <div id="resources">
        <Navbar/>
        <div id="rmainArea">
            <div class="artBox">
                <div id="resourceMedia">
                    <div class="rImg">
                        <img src={img1}></img>
                    </div>
                    <div id="contentBox">
                        <div id="content">
                            <h3>Article Topic: Covid 19</h3>
                            <a href="https://www.nyc.gov/site/doh/covid/covid-19-main.page" target="_blank">Article Title: What You Need to Know About Covid 19 Now</a>
                            <p>Article Author: NYC Department of Health</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="artBox">
                <div id="resourceMedia">
                    <div class="rImg">
                        <img src={img2}></img>
                    </div>
                    <div id="contentBox">
                        <div id="content">
                            <h3>Article Topic: Nutrition</h3>
                            <a href="https://www.medicalnewstoday.com/articles/are-plant-based-meat-substitutes-really-better-for-the-heart-than-meat-options" target="_blank">Article Title: Are plant-based meat substitutes really better for the heart than meat options?</a>
                            <p>Article Author: Paul Ian Cross Ph.D.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="artBox">
                <div id="resourceMedia">
                    <div class="rImg">
                        <img src={img3}></img>
                    </div>
                    <div id="contentBox">
                        <div id="content">
                            <h3>Article Topic: Gut Health</h3>
                            <a href="https://www.medicalnewstoday.com/articles/in-conversation-what-do-we-know-about-the-gut-microbiome-in-ibd" target="_blank">Article Title: In Conversation: What do we know about the gut microbiome in IBD?</a>
                            <p>Article Author:  Maria Cohut Ph.D.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="artBox">
                <div id="resourceMedia">
                    <div class="rImg">
                        <img src={img4}></img>
                    </div>
                    <div id="contentBox">
                        <div id="content">
                            <h3>Article Topic: Health Insurance</h3>
                            <a href="https://www.nyc.gov/site/doh/health/health-topics/health-insurance.page" target="_blank">Article Title: Health Insurance: Enrollment Counselors</a>
                            <p>Article Author: NYC Department of Health</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Resources;