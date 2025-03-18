const express = require('express');
const router = express.Router();
const path = require('path');

// Ruta principal "/" que sirve el formulario de login
router.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../public/auth-login-cover.html');
    res.status(200).sendFile(filePath);  // Sirve el archivo de login
});

// Ruta GET "/login" que sirve el HTML de login específico
router.get('/login', (req, res) => {
    const filePath = path.join(__dirname, '../public/auth-login-cover.html');
    res.status(200).sendFile(filePath);  // Sirve el HTML para login
});

// Ruta POST "/login" para recibir los datos del formulario y redirigir a "/home"
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    res.redirect('/home');  // Redirige a /home después de un POST exitoso
});

// Ruta "/home" para servir el archivo HTML después del login
router.get('/home', (req, res) => {
    const filePath = path.join(__dirname, '../public/index.html');
    res.sendFile(filePath);  // Sirve el archivo index.html
});

// Middleware para manejar rutas no encontradas
router.use((req, res) => {
    const filePath = path.join(__dirname, '../public/auth-404-minimal.html');
    res.status(404).sendFile(filePath);  // Sirve el HTML de error 404
});

module.exports = router;
