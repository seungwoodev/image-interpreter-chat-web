const mysql = require('mysql');
 
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'wngud5182',
    database: 'week3'
});
 
module.exports = db;