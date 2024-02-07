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
    height: 50vh;
    width: 50vh;
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
                <Form>
                    <MenuItem to="/register">register</MenuItem>
                </Form>
                
            </Background>

        </div>
    )
}
export default Login;