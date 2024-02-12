import dbConfig from "../db.js"

export const registerUser = (req, res) => {
    const sql = "INSERT INTO Users (username, passwords, email, first_name, last_name) VALUES (?);";
    const values = [
        req.body.username,
        req.body.password,
        req.body.email,
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
