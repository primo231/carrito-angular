const express = require('express');
const router = express.Router();

const conexion = require('../db');

router.get('/', (req, res) => {

    conexion.query(
        'SELECT * FROM clientes',
        (err, resultados) => {

            if(err){
                return res.status(500).json(err);
            }

            res.json(resultados);

        }
    );

});

router.post('/', (req, res) => {

    const { nombre, correo, telefono } = req.body;

    conexion.query(
        'INSERT INTO clientes(nombre, correo, telefono) VALUES (?, ?, ?)',
        [nombre, correo, telefono],
        (err, resultado) => {

            if(err){
                return res.status(500).json(err);
            }

            res.json(resultado);

        }
    );

});

router.put('/:id', (req, res) => {

    const { nombre, correo, telefono } = req.body;

    conexion.query(
        'UPDATE clientes SET nombre=?, correo=?, telefono=? WHERE id=?',
        [nombre, correo, telefono, req.params.id],
        (err, resultado) => {

            if(err){
                return res.status(500).json(err);
            }

            res.json(resultado);

        }
    );

});

router.delete('/:id', (req, res) => {

    conexion.query(
        'DELETE FROM clientes WHERE id=?',
        [req.params.id],
        (err, resultado) => {

            if(err){
                return res.status(500).json(err);
            }

            res.json(resultado);

        }
    );

});

module.exports = router;