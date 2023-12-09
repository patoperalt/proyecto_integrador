const express = require('express');
const router = express.Router();

// const controller = require('../controllers/shopControllers');

// router.get('/', controller.shop);
// router.get('/item/:id', controller.item);
// router.post('/item/:id/add', controller.addItem);
// router.get('/cart', controller.cart);
// router.post('/cart', controller.addToCart);

/* la forma menos simplificada que teniamos al principio: */

const {
    shop,
    item,
    addItem,
    cart,
    addToCart
} = require('../controllers/shopControllers');

router.get('/', shop);
router.get('/item/:id', item);
router.post('/item/:id/add', addItem);
router.get('/cart', cart);
router.post('/cart', addToCart);

module.exports = router;