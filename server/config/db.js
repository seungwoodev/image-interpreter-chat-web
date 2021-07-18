const mysql = require('mysql');
 
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'rhwldn',
    database: 'reactboard'
});
 
module.exports = db;