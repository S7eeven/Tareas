//TODO: #3 DEFINIMOS LAS CONEXION A LA BD
const mongoose = require('mongoose');

//Parte #4 variable de entorno, nos permite conectar a uan instancia o a un servidor de mongoBD
const URI = process.env.MONGODB_URI 
    ? process.env.MONGODB_URI 
    : 'mongodb://localhost/databasetest'; 
    
mongoose.connect(URI, {
    //para que mongoose se pueda conecatr, no es obliagtorio ya no conpatible
    /*
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
    */
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('BD conectada EXITOSAMENTE');
});
