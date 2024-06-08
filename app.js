import express from 'express';

import { fileURLToPath } from 'url'; // Rutas absolutas
import { dirname } from 'path'; // Rutas absolutas

import hbs from 'hbs';

import {config} from 'dotenv';

const __filename = fileURLToPath(import.meta.url); // Rutas absolutas
const __dirname = dirname(__filename); // Rutas absolutas

const app = express();
const port = config({path:'.env'}).parsed.PORT;

// Hnadlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Middleware
// Para servir contenido estático de la carpeta /public
app.use(express.static('public'));

// Lo nuevo de HBS, el CONTROLADOR
// Se envían parámetros a la Vista
// En la Vista, se recuperan con doble llave {{ }}
app.get('/', (req, res) => {
    res.render('home', {
        nombre:'Jorge Rodríguez',
        titulo: 'Curso de NodeJS'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre:'Jorge Rodríguez',
        titulo: 'Curso de NodeJS'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre:'Jorge Rodríguez',
        titulo: 'Curso de NodeJS'
    });
});

app.listen(port, () => {
    console.log(`Ejemplo escuchando en http://localhost:${port}`);
});