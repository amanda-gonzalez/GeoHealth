import dbConfig from "../db.js"

export const registerUser = (req, res) => {
    const sql = "INSERT INTO Users (username, passwords, email, first_name, last_name) VALUES (?)";
    const values = [
        req.body.username,
        req.body.password,
        req.body.email,
        req.body.firstname,
        req.body.lastname
    ]
    dbConfig.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    })
}
