const express = require('express');
const router = express.Router();

const controller = require('../controllers/shopControllers');

router.get('/', controller.shop);

/* falta terminar estas*/ 
router.get('/item/:id', (req, res) => res.send('Esta es la vista del ITEM SELECCIONADO'));
router.post('/item/:id/add', (req, res) => res.send('Esta es la vista para AGREGAR un nuevo ITEM'));
router.get('/cart', (req, res) => res.send('Esta es la vista del CARRITO'));
router.post('/cart', (req, res) => res.send('Esta es la vista para AGREGAR un nuevo ITEM al CARRITO'));

module.exports = router;

