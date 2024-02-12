import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Background = styled.div`
    background-color: #A4E7F5;
    display: flex;
    height: 90vh;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const Form = styled.div`
    background-color: white;
    height: 65vh;
    width: 50vh;
    border-radius: 10%;
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
`;

const MenuItem = styled(Link)`
    font-size: 5vh;
    color: black;
`;

const title = document.getElementById('title');
title.style.textAlign = 'center';


const Input = styled.input`
`;
const Login = () => {
    return (
        <div>
            <Navbar/>
            <Background>
                <Form>
                    <div id="title">
                        <h1>Login</h1>
                    </div>
                    <MenuItem to="/register">register</MenuItem>
                </Form>
                
            </Background>

        </div>
    )
}
export default Login;