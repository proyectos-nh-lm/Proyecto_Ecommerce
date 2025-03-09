const express = require('express');
const router = express.Router();
const path = require('path');

// Ruta principal "/"
router.get('/', (req, res) => {
    // Proporcionar la ruta absoluta al archivo HTML en la carpeta "public"
    const filePath = path.join(__dirname, '../public/auth-login-cover.html');
    res.status(200).sendFile(filePath);
});

// Ruta "/login"
router.get('/login', (req, res) => {
    res.send('Aquí iría el formulario de login');
});

// Middleware para manejar rutas no encontradas
router.use((req, res) => {
    const filePath = path.join(__dirname, '../public/auth-404-minimal.html');
    res.status(404).sendFile(filePath);
});

module.exports = router;
