const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
    port: process.env.DBPORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

pool.getConnection((err, conn) => {
    if(err) {
        console.error('Hubo un error al conectarse a la DB: ' + err);
    } else {
        console.log('Conexion a la Base de datos exitosa');
        conn.release();
    }
});

module.exports = {
    conn: pool.promise()
}