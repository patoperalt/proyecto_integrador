const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Esta es la vista de SHOP'));
router.get('/item/:id', (req, res) => res.send('Esta es la vista del ITEM SELECCIONADO'));
router.post('/item/:id/add', (req, res) => res.send('Esta es la vista para AGREGAR un nuevo ITEM'));
router.get('/cart', (req, res) => res.send('Esta es la vista del CARRITO'));
router.post('/cart', (req, res) => res.send('Esta es la vista para AGREGAR un nuevo ITEM al CARRITO'));



// const {
//     shopView,
//     detailView,
//     addItemToCart,
//     cartView,
//     checkout,
// } = require('../controllers/shopControllers');

// router.get('/', shopView);
// router.get('/item/:id', detailView);
// router.post('/item/:id/add', addItemToCart);
// router.get('/cart', cartView);
// router.post('/cart', checkout);

module.exports = router;

