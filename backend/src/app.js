//TODO: #1 ARCHIVO PRINCIPAL CREAMOS NUESTRO SERVIDOR.
const express = require('express');
const cors = require('cors');
//Inicializamos.
const app = express();

//setting-configurara el servidor
app.set('port', process.env.PORT || 4000);

//middlewares-definir algunas funciones antes de que llegen a las rutas.
app.use(cors()); //cada ves que llega una peticion al servido podra recibir y enviar datos.
app.use(express.json()); //le decimos que va a enterder los json y srchivos de formatos string

//TODO: #5 Routes - rutas que la aplicacion podra visitar
app.use('/api/users', require('./routes/users'))
app.use('/api/notes', require('./routes/notes'))

module.exports = app;