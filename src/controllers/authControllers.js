const path = require('path');

module.exports = {
    login: (req, res) => {
        res.render(path.resolve(__dirname, '../views/auth/login.ejs'), {
            title: "Ingresar"
        });
    },
    doLogin: (req, res) => res.send('Esta es la vista de doLogin'),
    register: (req, res) => {
        res.render(path.resolve(__dirname, '../views/auth/register.ejs'));
    },
    doRegister: (req, res) => res.send('Esta es la vista de doRegister'),
    logout: (req, res) => res.send('Esta es la vista de Logout'),
}