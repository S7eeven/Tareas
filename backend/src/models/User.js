const { Schema, model } = require('mongoose');

//TODO: #7 CREAMOS NUESTRO ESQUEMA Y MODELO.
const userSchema = new Schema(
{
    username: {
        type: String,
        //el usuario no debe repetirse
        unique: true,
        //Limpie los esapcios en blanco de unestar cadena.
        trim: true,
        required: true
    }
}, {
    timestamps: true
});

//modelo
module.exports = model('User', userSchema);