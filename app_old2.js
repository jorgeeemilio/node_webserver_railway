import express from 'express';

import { fileURLToPath } from 'url'; // Rutas absolutas
import { dirname } from 'path'; // Rutas absolutas

const __filename = fileURLToPath(import.meta.url); // Rutas absolutas
const __dirname = dirname(__filename); // Rutas absolutas

const app = express();
const port = 8090;

// Middleware
// Para servir contenido estático de la carpeta /public
app.use(express.static('public'));

// Con el Middleware, lo siguiente NO se ejecuta
// Lo que se ponga como Middleware tiene prioridad frente a las siguientes rutas
app.get('/', function (req, res) {
    res.send('¡Hola mundo!');
});

// Función mejorada, función flecha
app.get('/hola', (req, res) => {
    res.send('¡Hola mundo! en su ruta');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.get('*', (req, res) => {
    res.send('Página no encontrada');
});

app.listen(port, () => {
    console.log(`Ejemplo escuchando en http://localhost:${port}`);
});