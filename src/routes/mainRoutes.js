const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => res.send('Esta es la vista de HOME'));
router.get('/contact', (req, res) => res.send('Esta es la vista de Contacto'));
router.get('/about', (req, res) => res.send('Esta es la vista de About'));
router.get('/faqs', (req, res) => res.send('Esta es la vista de FAQS'));

//const {
//  homeView,
//  contactView,
//  aboutView,
//  faqsView,
//} = require('../controllers/mainControllers');

//router.get('/', (req, res, next) => {

  //  req.session.logs = req.session.logs ? ++req.session.logs : 1;
  //  console.log(req.session.logs);

//    next();
//}, homeView);
//router.get('/contact', contactView);
//router.get('/about', aboutView);
//router.get('/faqs', faqsView); //

module.exports = router;