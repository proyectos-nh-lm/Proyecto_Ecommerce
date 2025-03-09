const express = require('express');
const router = express.Router();

// Ruta principal "/"
router.get('/', (req, res) => {
    const filePath = 'Template/duralux/html/crm/dist/templates/auth-404-minimal.html';

});

// Ruta "/login"
router.get('/login', (req, res) => {
    res.send('Aquí iría el formulario de login');
});

// Middleware para manejar rutas no encontradas
router.use((req, res) => {
    res.status(404).send('Error 404: Página no encontrada');
});

module.exports = router;
