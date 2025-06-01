const mysql = require('mysql2');

require('dotenv').config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_NAME } = process.env;

console.log('DB_USER:', DB_USER);
console.log('DB_PASSWORD:', DB_PASSWORD);

const pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_NAME,
});

module.exports = pool.promise();