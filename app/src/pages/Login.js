import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";

const Background = styled.div`
    background-color: #A4E7F5;
    display: flex;
    height: 90vh;
    width: 100%;
    align-items: center;
    justify-content: center;
`;



const Login = () => {

    return (
        <div>
            <Navbar/>
            <Background>
                <LoginForm/>
            </Background>
        </div>
    )
}
export default Login;