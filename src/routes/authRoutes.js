const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => res.send('Esta es la vista de LOGIN'));
router.post('/login', (req, res) => res.send('Esta es la ruta que valida los datos de LOGIN'));
router.get('/register', (req, res) => res.send('Esta es la vista de REGISTER'));
router.post('/register', (req, res) => res.send('Esta es la ruta que CREA un nuevo USUARIO'));
router.get('/logout', (req, res) => res.send('Esta ruta desloguea o cierra la sesion del usuario'));


module.exports = router;