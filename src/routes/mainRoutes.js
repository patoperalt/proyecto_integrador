const express = require('express');
const router = express.Router();

const controller = require('../controllers/mainControllers');

router.get('/home', controller.home);
router.get('/contact', controller.contact);
router.get('/about', controller.about);
router.get('/faqs', controller.faqs);

module.exports = router;