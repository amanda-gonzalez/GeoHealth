import dbConfig from "../db.js"
const {createHash} = require('crypto');



const loginAdmin = (request, response) => {
    const username = request.query.username;
    const password = request.query.password;
    const loginQuery = "SELECT * FROM Admins WHERE username = ?";


    db.query(loginQuery, [username], (error, data) => {
        if (error) return response.json(error);
        if (data.length === 0) return response.status(404).json("Admin user not found!");

        //need to secure this at some point
        let checkPassword = 0;
        if (request.body.password === data[0].password) {
            checkPassword = 1;
        }
        if (!checkPassword) return response.status(400).json("Wrong password or email.");
        const token = jwt.sign({id: data[0].id}, "jwtkey");
        const {password, ...other} = data[0];
        console.log(checkPassword);
        response.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json(other);
    })

}
