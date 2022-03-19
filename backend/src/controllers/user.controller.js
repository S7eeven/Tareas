//TODO: #6 creamos nuestro controlador.
const userCtrl = {};

const User = require('../models/User');

userCtrl.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

userCtrl.createUser = async (req, res) => {
    //estamos guardando un nuevo usuario.
    try {
        const { username } = req.body;
        const newUser = new User({ username });
        await newUser.save();
        res.json('User created');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

userCtrl.deleteUser = async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json('delete User Router')
}

module.exports = userCtrl;