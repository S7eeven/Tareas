const {Router} = require('express');
const router = Router();

//Importamos nuestro controlador notes - previamente ya establecido en el controllers
const { getNotes, createNotes, getNote, updateNotes, deleteNote } = require('../controllers/notes.controller');

router.route('/')
    .get(getNotes)
    .post(createNotes)

router.route('/:id')
    //le aumente la s getUsers
    .get(getNotes)
    .delete(deleteNote)
    .put(updateNotes)


module.exports = router;