import React, {useState} from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

import './app.css';

const Form = styled.form`
    background-color: white;
    height: 50vh;
    width: 55vh;
    border-radius: 10%;
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
`;

// const ErrorMessage = styled.span`
//   color: red;
//   font-size: 0.7rem;
//   display: block;
// `;


const MenuItem = styled(Link)`
    font-size: 5vh;
    font-size: smaller;
    color: black;
    text-decoration: none;
`;

const LoginForm = () => {
    const apiLink = "http://localhost:4000/api/login/loginUser";
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    

    const handleChange = (e) => {
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}));

    }
    const login = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(apiLink, inputs);
            navigate("/map");
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div id="Login">
            <Navbar/>
            <div id="mainArea">
                <Form action="" onSubmit={login}>
                    <h1 id="title">Login</h1>
                    <div class="credentials">
                        <div id="emailDiv">
                            <label htmlFor="email"><strong>Email</strong></label>
                            <input onChange={handleChange} type="email" id="email" name="email" style={{paddingTop: 5+'px', 
                                                                                                        paddingBottom: 5+'px',
                                                                                                        paddingLeft: 100+'px',
                                                                                                        paddingRight: 100+'px',}}/>
                        </div>
                        <div id="passwordDiv">
                            <label htmlFor="password"><strong>Password</strong></label>
                            <input onChange={handleChange} type="password" id="password" name="password" style={{paddingTop: 5+'px', 
                                                                                                        paddingBottom: 5+'px',
                                                                                                        paddingLeft: 100+'px',
                                                                                                        paddingRight: 100+'px',}}/>
                        </div>
                    </div>
                    <MenuItem id="registerRedirect" to="/register">New User? Sign Up Here</MenuItem>
                    <button type="signin" id="signup">Sign In</button><br/>
                </Form>
            </div>
        </div>
    )
}

export default LoginForm;