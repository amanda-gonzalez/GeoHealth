import dbConfig from "../db.js"
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
export const loginAdmin = (request, response) => {
    const email = request.body.email;
    const loginQuery = "SELECT * FROM Admin WHERE email = ?";


    dbConfig.query(loginQuery, [email], (error, data) => {
        const user = {email: email};
        console.log('this is running');
        if (error) return response.json(error);
        if (data.length === 0) return response.status(404).json("User not found!");

        if (bcrypt.compareSync(request.body.password, data[0].password)) {

            const token = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET);
            console.log(checkPassword);
            response.cookie("access_token", token, {
                httpOnly: true
            }).status(200).json(other);
        } else {
            return response.status(400).json("Wrong password or email.");
        }
    })

}

export const loginUser = (request, response) => {
    const email = request.body.email;
    const loginQuery = "SELECT * FROM Users WHERE email = ?";


    dbConfig.query(loginQuery, [email], (error, data) => {
        console.log('this is running');
        const user = {email: email};
        if (error) return response.json(error);
        if (data.length === 0) return response.status(404).json("User not found!");

        if (bcrypt.compareSync(request.body.password, data[0].passwords)) {
            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
            response.status(200).json({token});
        } else {
            return response.status(400).json("Wrong password or email.");
        }
    })

}