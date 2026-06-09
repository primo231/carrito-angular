const express = require('express');
const router = express.Router();

const conexion = require('../db');


// =====================
// GET
// =====================

router.get('/', (req, res) => {

    conexion.query(
        'SELECT * FROM categorias',
        (err, resultados) => {

            if(err){
                return res.status(500).json(err);
            }

            res.json(resultados);
        }
    );

});


// =====================
// POST
// =====================

router.post('/', (req, res) => {

    const { nombre, descripcion } = req.body;

    conexion.query(
        'INSERT INTO categorias(nombre, descripcion) VALUES (?, ?)',
        [nombre, descripcion],
        (err, resultado) => {

            if(err){
                return res.status(500).json(err);
            }

            res.json(resultado);
        }
    );

});


// =====================
// PUT
// =====================

router.put('/:id', (req, res) => {

    const { nombre, descripcion } = req.body;

    conexion.query(
        'UPDATE categorias SET nombre=?, descripcion=? WHERE id=?',
        [nombre, descripcion, req.params.id],
        (err, resultado) => {

            if(err){
                return res.status(500).json(err);
            }

            res.json(resultado);
        }
    );

});


// =====================
// DELETE
// =====================

router.delete('/:id', (req, res) => {

    conexion.query(
        'DELETE FROM categorias WHERE id=?',
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