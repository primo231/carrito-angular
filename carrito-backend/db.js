const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'polifemo2009',
    database: 'tienda_online'
});

conexion.connect(err => {

    if(err){
        console.log(err);
        return;
    }

    console.log('MySQL conectado');

});

module.exports = conexion;