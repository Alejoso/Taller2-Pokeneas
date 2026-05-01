// Este archivito es para que configuremos la aplicacion. Aqui importamos el archivo de rutas y la app en si.

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
require('dotenv').config();
const pokeneasRoutes = require('./routes/pokeneas.routes');

const app = express();

// Motor de templates
app.set('view engine', 'ejs');
app.set('views' , './src/views')

// Public para usar estilos css
app.use(express.static('./src/public'))

// Layouts para no repeitr codigo
app.use(expressLayouts);
app.set('layout', 'layouts/main');   // layout por defecto

// Rutas definidas
app.use('/', pokeneasRoutes);

module.exports = app;