const mysql = require('mysql');

const dbConfig = mysql.createConnection( {
    host: "database-geohealth.ceppaqnusfom.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "GeoHealth2024",
    database: "database-geohealth"
})

export default dbConfig;