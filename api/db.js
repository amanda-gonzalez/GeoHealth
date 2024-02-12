import mysql from "mysql";

const dbConfig = mysql.createConnection( {
    host: "database-geohealth.ceppaqnusfom.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "GeoHealth2024",
    database: "GeoHealth"
})

export default dbConfig;