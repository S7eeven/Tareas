require('dotenv').config();
//TODO: #4 lo que hace es que antes de que inicie toda la aplicacion va a importar las variables de entorno.

//TODO: #2 VA ARRANCAR EL Bakend y SERVIDOR.
const app = require('./app');
require('./database'); //cuando llame este archivo ejecutada el code de database.js

//FUNCION PRINCIPAL
async function main(){
    await app.listen(app.get('port'));
    console.log('Servidor iniciado por el puerto', app.get('port'));
}

main();