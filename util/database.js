const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root1',
    database: 'LABORATORIOS',//cambiar
    password: ''
});

module.exports = pool.promise(); //función que no devuelve resultado inmediato porque es asíncrona pero que promete que se va a ejecutar