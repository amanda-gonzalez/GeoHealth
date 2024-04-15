import dbConfig from "../db.js"
import jwt from "jsonwebtoken";
import express from "express";

export const getUserData = (request, response) => {
    jwt.verify(request.token, 'jwtkey', (error, userData) => {
        if (error) {
            console.log("Can't connect to the protected route");
            response.status(403);
        } else {
            response.status(201).json({message: "User verified successfully", userData: userData});
            console.log("Successfully connected to protected route")
        }
    } )

}