const mysql = require("mysql2/promise");
const databaseConfig= require("../config/database");

async function createdUserTable(){
    try{
       const connection = await mysql.createConnection(databaseConfig);
       
       await connection.query(`USE ${databaseConfig.datab}`);

       await connection.query(`CREATE TABLE IF NOT EXISTS user (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL

       )`);

       await connection.end();

       console.log("Table user created!")
    }catch (error) {
        console.log(`Error creating table user: ${error}`);
    }
}

createdUserTable();