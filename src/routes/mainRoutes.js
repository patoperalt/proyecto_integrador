const express = require('express');
const router = express.Router();

const {
    home, 
    contact, 
    about, 
    faqs,
} = require('../controllers/mainControllers');

router.get('/', home);
router.get('/home', home);
router.get('/contact', contact);
router.get('/about', about);
router.get('/faqs', faqs);


// const controller = require('../controllers/mainControllers');

// router.get('/', controller.home);
// router.get('/home', controller.home);
// router.get('/contact', controller.contact);
// router.get('/about', controller.about);
// router.get('/faqs', controller.faqs);

module.exports = router;