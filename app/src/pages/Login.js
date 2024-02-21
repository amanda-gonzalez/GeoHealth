import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";

import LoginForm from "../components/LoginForm";

import {Link} from "react-router-dom";


const Background = styled.div`
    background-color: #A4E7F5;
    display: flex;
    height: 90vh;
    width: 100%;
    align-items: center;
    justify-content: center;
`;


const MenuItem = styled(Link)`
    font-size: 5vh;
    color: black;
`;

const Input = styled.input`
`;

const Login = () => {

    return (
        <div>
            <Navbar/>
            <Background>
                <LoginForm/>
                <Form>
                    <MenuItem to="/register">register</MenuItem>
                </Form>
            </Background>
        </div>
    )
}
export default Login;