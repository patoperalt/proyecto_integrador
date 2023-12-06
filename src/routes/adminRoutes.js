const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Esta es la vista de ADMIN'));
router.get('/create', (req, res) => res.send('Esta es la vista para CREAR un nuevo ITEM'));
router.post('/create', (req, res) => res.send('Esta es la vista para AGREGAR un nuevo ITEM'));
router.get('/edit/:id', (req, res) => res.send('Esta es la vista para EDITAR un ITEM ESPECIFICO'));
router.put('/edit/:id', (req, res) => res.send('Esta es la vista para IMPACTAR la MODIFICACION un ITEM ESPECIFICO'));
router.delete('/delete/:id', (req, res) => res.send('Esta es la vista para ELIMINAR un ITEM ESPECIFICO'));




module.exports = router;