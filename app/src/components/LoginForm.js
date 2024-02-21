import React, {useState} from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
    display: flex;
    color: black;
    height: 50vh;
    width: 50vh;
    flex-direction: column;
    background-color: white;
    justify-content: space-between;
`;

const Input = styled.input`
  color: gainsboro;
`;

const LoginForm = () => {
    const apiLink = "http://localhost:4000/api/auth/login";
    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}));
    }
    const login = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(apiLink, inputs);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <Container>
            <h1>Login</h1>
            <p>username</p>
            <Input name="username" onChange={handleChange}/>
            <p>password</p>
            <Input type="password" name= "password" onChange={handleChange}/>
            <button onClick={login}>sign in</button>
        </Container>
    )
}

export default LoginForm;