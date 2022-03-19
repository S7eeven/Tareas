const {Router} = require('express');
const router = Router();

const { getUsers, createUser, deleteUser } = require('../controllers/user.controller');

router.route('/')
    .get(getUsers)
    .post(createUser)

//Creamos otro enrutardo pero ahora solo por el id (http://localhost:4000/api/users/1)
router.route('/:id')
    .delete(deleteUser)

module.exports = router;