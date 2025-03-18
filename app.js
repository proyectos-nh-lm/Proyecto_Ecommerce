const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

// Importar las rutas desde la carpeta "routes"
const rutas = require('./routes/index');

// Habilitar CORS para permitir solicitudes desde otros dominios
app.use(cors());

// Middleware para manejar datos de formularios y JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Usar las rutas en el servidor
app.use('/', rutas);

// Iniciar el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
