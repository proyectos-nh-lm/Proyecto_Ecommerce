const express = require('express');
const router = express.Router();
const path = require('path');

// Ruta principal "/"
router.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../public/auth-login-cover.html');
    res.status(200).sendFile(filePath);
});

// Redirección a "/"
router.get('/login', (req, res) => {
    res.redirect('/');
});

// Ruta POST para recibir el formulario de login
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    res.redirect('/home')
});

// Nueva ruta "/Home" para servir el archivo HTML desde la carpeta Template/duralux
router.get('/home', (req, res) => {
    const filePath = path.join(__dirname, '../public/index.html');
    res.sendFile(filePath);
});


// Middleware para manejar rutas no encontradas
router.use((req, res) => {
    const filePath = path.join(__dirname, '../public/auth-404-minimal.html');
    res.status(404).sendFile(filePath);
});

module.exports = router;
