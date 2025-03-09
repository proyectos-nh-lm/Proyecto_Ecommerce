const express = require('express');
const app = express();
const path = require('path');

// Importar las rutas desde la carpeta "routes"
const rutas = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));

// Usar las rutas en el servidor
app.use('/', rutas);

// Iniciar el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
