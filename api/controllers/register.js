import dbConfig from "../db.js"
import bcrypt from "bcrypt";
export const registerUser = (req, res) => {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const sql = "INSERT INTO Users (email, passwords, first_name, last_name) VALUES (?);";
    const values = [
        req.body.email,
        hash,
        req.body.firstname,
        req.body.lastname
    ]
    dbConfig.query(sql, [values], (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).json({error: "An error occurred during registration."});
        }
        return res.status(201).json({message: "User registered successfully", userData: data});
    })
}

export const registerAdmin = (req, res) => {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const sql = "INSERT INTO Admins (email, passwords, first_name, last_name) VALUES (?);";
    const values = [
        req.body.email,
        hash,
        req.body.firstname,
        req.body.lastname
    ]
    dbConfig.query(sql, [values], (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).json({error: "An error occurred during registration."});
        }
        return res.status(201).json({message: "User registered successfully", userData: data});
    })
}