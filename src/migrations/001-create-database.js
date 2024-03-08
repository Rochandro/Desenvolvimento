const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js")

async function createDatabasse(){
    try{
        const connection = await mysql.createConnection({
            host: databaseConfig.host,
            user: databaseConfig.user,
            password:  databaseConfig.password,
        });
    
        await connection.query(
        `CREATE DATABASE IF NOT EXISTS ${databaseConfig.database}`
        );
    
        await connection.end();
    
        console.log("Database created!");
    } catch (error) {
        console.log(`error creating database: ${error}`);
    }
}    

createDatabasse();