import dbConfig from "../db.js"
import jwt from "jsonwebtoken";


export const getUser = (request, response) => {
    const token = request.headers.authorization;

    try {
        const verifiedToken = jwt.verify(token, "jwtkey");
        const email = verifiedToken.email;
        console.log(verifiedToken);

        dbConfig.query("SELECT * From Users WHERE email = ?", [email], (error, results) => {
            if (error) {
                console.error("Error fetching user profile:", error);
                response.status(500).json({message: "Internal server error"});
            } else {
                response.status(200).json(results);
            }
        });

    }  catch (error) {
        console.error("Error verifying JWT token:", error);
        response.status(401).json({ message: "Unauthorized" });
    }

}