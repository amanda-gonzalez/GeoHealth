import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import {Link} from "react-router-dom";
import './app.css';

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

const Button = styled.button`
    padding: 10px;
    padding-top: 30px;
    color: black;
    text-decoration: none;
`;

const MenuItem = styled(Link)`
    font-size: smaller;
    color: black;
    text-decoration: none;
`;


// const Input = styled.input`
// `;

const Login = () => {
    return (
        <div>
            <Navbar/>
            <Background>
                <Form>
                    <div id="title">
                        <h1>Login</h1>
                    </div>
                    <div class="credentials">
                        <h2>Email Address</h2>
                        <input type="text" id="email" name="email" value="Email" required minlength="12" maxlength="25" size="30"></input>
                        <h2>Password</h2>
                        <input type="text" id="password" name="password" value="Password" required minlength="12" maxlength="25" size="30"></input>
                    </div>
                    <MenuItem to="/register" id="register">New User? Sign Up Here</MenuItem>
                    <Button id="login">Login</Button>
                </Form>
                
            </Background>

        </div>
    )
}
export default Login;