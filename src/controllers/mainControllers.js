const path = require('path');
const { getAll } = require('../models/licenceModel');

module.exports = {
    home: async (req, res) => {

        const data = await getAll();

        res.render('index', {
            title: "Home",
            data
        });
    },
    contact: (req, res) => res.send('Esta es la vista de Contacto'),
    about: (req, res) => res.send('Esta es la vista de About'),
    faqs: (req, res) => res.send('Esta es la vista de FAQS'),
}