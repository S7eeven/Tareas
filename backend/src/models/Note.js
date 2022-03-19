//TODO: #7 esto nos permite ver que campo quiero guardar de un dato
//EL MODELO NOS PERMITE DEFINIR COMO VAMOS A ESTAR TRABAJANDO CON ESOS DATOS
//con mongoose definimos nuestro modelo (esquema y modelo),
const {Schema, model} = require('mongoose');

//ESQUEMA
const noteSchema = new Schema({
    title: String,
    //le indicamos que este campo de CONTENT es REQUERIDO
    content: {
        type: String,
        required: true
    },
    author: String,
    date: {
        type: Date,
        default: Date.now //guarse la fecha actual
    }
}, {
    timestamps: true
});

//Modelo
module.exports = model('Note', noteSchema);


