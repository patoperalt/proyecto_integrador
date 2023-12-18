const path = require('path');
const { getAllLicence } = require('../models/licenceModel');
const { getAllProducts } = require('../models/productModel');


module.exports = {
    home: async (req, res) => {

        const data = await getAllLicence();
        const item = await getAllProducts();

        res.render('index', {
            title: "Home",
            data,
            item,
        });
    },
    contact: (req, res) => res.send('Esta es la vista de Contacto'),
    about: (req, res) => res.send('Esta es la vista de About'),
    faqs: (req, res) => res.send('Esta es la vista de FAQS'),

}