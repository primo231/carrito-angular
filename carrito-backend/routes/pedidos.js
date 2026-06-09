const express = require('express');
const router = express.Router();

const conexion = require('../db');


// ====================
// GET
// ====================

router.get('/', (req, res) => {

    conexion.query(
        `
        SELECT
            p.id,
            c.nombre AS cliente,
            p.fecha,
            p.total
        FROM pedidos p
        INNER JOIN clientes c
            ON p.cliente_id = c.id
        `,
        (error, resultados) => {

            if(error){
                return res.status(500).json(error);
            }

            res.json(resultados);

        }
    );

});


// ====================
// INSERT
// ====================

router.post('/', (req, res) => {

    const {
        cliente_id,
        total
    } = req.body;

    conexion.query(
        `
        INSERT INTO pedidos
        (cliente_id,total)
        VALUES (?,?)
        `,
        [
            cliente_id,
            total
        ],
        (error, resultado) => {

            if(error){
                return res.status(500).json(error);
            }

            res.json(resultado);

        }
    );

});


// ====================
// UPDATE
// ====================

router.put('/:id', (req, res) => {

    const {
        cliente_id,
        total
    } = req.body;

    conexion.query(
        `
        UPDATE pedidos
        SET cliente_id=?,
            total=?
        WHERE id=?
        `,
        [
            cliente_id,
            total,
            req.params.id
        ],
        (error, resultado) => {

            if(error){
                return res.status(500).json(error);
            }

            res.json(resultado);

        }
    );

});


// ====================
// DELETE
// ====================

router.delete('/:id', (req, res) => {

    conexion.query(
        'DELETE FROM pedidos WHERE id=?',
        [req.params.id],
        (error, resultado) => {

            if(error){
                return res.status(500).json(error);
            }

            res.json(resultado);

        }
    );

});

module.exports = router;