const mysql = require('mysql2');

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'polifemo2009',
  database: 'carrito_db'
});

conexion.connect(error => {
  if(error){
    console.log(error);
  } else {
    console.log('MySQL conectado');
  }
});

module.exports = conexion;