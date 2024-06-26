import React, {useState} from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './app.css';

const Background = styled.div`
    background-color: #A4E7F5;
    display: flex;
    height: 90vh;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const Form = styled.form`
    background-color: white;
    height: 65vh;
    width: 75vh;
    border-radius: 10%;
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.7rem;
  display: block;
`;

// const Input = styled.input`
// `;


const Register = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        firstname: '',
        lastname: ''
    })

    const [errors, setErrors] = useState({})
    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}))
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        if (!errors.password && !errors.email && !errors.firstname && !errors.lastname) {
            axios.post('http://localhost:4000/api/register/registerUser', values)
            .then(res => {console.log(res)
                        navigate("/login")})
            .catch(err => console.log(err));
        }
    }
    

    return (
        <div id="register">
            <Navbar/>
            <div id="mainArea">
                <Form action="" onSubmit={handleSubmit}>
                    <h1 id="title">Sign Up</h1>
                    <div class="credentials">
                        <div id="firstnameDiv">
                            <label htmlFor="firstname"><strong>First Name</strong></label>
                            <input onChange={handleInput} type="text" id="firstname" name="firstname"/>
                            {errors.firstname && <ErrorMessage>{errors.firstname}</ErrorMessage>}
                        </div>
                        <div id="lastnameDiv">
                            <label htmlFor="lastname"><strong>Last Name</strong></label>
                            <input onChange={handleInput} type="text" id="lastname" name="lastname"/>
                            {errors.lastname && <ErrorMessage>{errors.lastname}</ErrorMessage>}
                        </div>
                        <div id="emailDiv">
                            <label htmlFor="email"><strong>Email</strong></label>
                            <input onChange={handleInput} type="email" id="email" name="email"/>
                            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                        </div>
                        <div id="passwordDiv">
                            <label htmlFor="password"><strong>Password</strong></label>
                            <ul>
                                <li>At least 8 characters</li>
                                <li>Include at least 1 capital letter</li>
                                <li>Include at least 1 small letter</li>
                                <li>Include at least 1 number</li>
                            </ul>
                            <input onChange={handleInput} type="password" id="password" name="password"/>
                            {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
                        </div>
                    </div>
                    <button type="submit" id="signup">Sign Up</button><br/>
                </Form>
            </div>

        </div>
    )
}

function validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;


    if (values.firstname === "") {
        error.firstname = "Firstname should not be empty";
    }

    if (values.lastname === "") {
        error.lastname = "Lastname should not be empty";
    }

    if (values.email === "") {
        error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Incorrect email format";
    }

    if (values.password === "") {
        error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Insufficient password";
    }

    return error;
}

export default Register;