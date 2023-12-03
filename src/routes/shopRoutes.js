const express = require('express');
const router = express.Router();


router.get('/',(req,res) => res.send('Route for Shop View'));
router.get('/item/:id', (req,res) => res.send(`Route for find and retrieve a product form the id: ${req.params.id} `));
router.post('/item/:id/add', (req,res) => res.send('Route for add the current item to the shop cart'));
router.get('/cart', (req,res) => res.send('Route for cart view'));
router.post('/cart', (req,res) => res.send('Route for go to checkout View'));

module.exports = router;

