import dbConfig from "../db.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const loginAdmin = (request, response) => {
    const email = request.body.email;
    const loginQuery = "SELECT * FROM Admin WHERE email = ?";


    dbConfig.query(loginQuery, [email], (error, data) => {
        if (error) return response.json(error);
        if (data.length === 0) return response.status(404).json("User not found!");

        if (bcrypt.compareSync(request.body.password, data[0].password)) {

            const token = jwt.sign({id: data[0].id}, "jwtkey");
            const {password, ...other} = data[0];
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
        if (error) return response.json(error);
        if (data.length === 0) return response.status(404).json("User not found!");
        if (!data[0].passwords) return response.status(404).json("Password not set.");

        if (bcrypt.compareSync(request.body.password, data[0].passwords)) {
            const token = jwt.sign({id: data[0].id}, "jwtkey");
            const {password, ...other} = data[0];
            response.cookie("access_token", token, {
                httpOnly: true
            }).status(200).json(other);
        } else {
            return response.status(400).json("Wrong password or email.");
        }
    })

}