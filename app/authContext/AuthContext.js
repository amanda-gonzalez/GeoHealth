import {createContext, useEffect, useState} from "react";
import axios from "axios";


export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const getUser = () => {
        return JSON.parse(localStorage.getItem("user"));
    }

    const logoout = () => {
        localStorage.removeItem("user")
    }

    const authUser = () => {
        const user = JSON.parse(localStorage.getItem("user"));

        if (user && user.accessToken) {
            return { "x-access-token": user.accessToken};
        } else {
            return {};
        }

    }

}