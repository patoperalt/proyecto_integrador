module.exports = {
    home: (req, res) => {
        res.render('index');
    },
    contact: (req, res) => res.send('Esta es la vista de Contacto'),
    about: (req, res) => res.send('Esta es la vista de About'),
    faqs: (req, res) => res.send('Esta es la vista de FAQS'),
}