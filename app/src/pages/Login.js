import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";

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

const Input = styled.input`
`;
const Login = () => {
    return (
        <div>
            <Navbar/>
            <Background>
                <Form>

                </Form>
            </Background>

        </div>
    )
}
export default Login;