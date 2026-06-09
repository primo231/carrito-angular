const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/categorias', require('./routes/categorias'));
app.use('/productos', require('./routes/productos'));
app.use('/clientes', require('./routes/clientes'));
app.use('/pedidos', require('./routes/pedidos'));
app.listen(3000, () => {
    console.log('Servidor ejecutándose en puerto 3000');
});