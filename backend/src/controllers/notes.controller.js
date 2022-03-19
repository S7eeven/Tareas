//TODO: #6 
const notesCtrl = {};

//Importamos nuesto modelo previamente ya establecido parte #7
const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
    //TODO: #7 PRIVIAMENTE.....
    //antes de devolver un mensja  hago una consulta a la BD, consulto mi modelo de notas
    //consulta todos los datos que hay en esa colecion.
    const notes = await Note.find(); 
    res.json(notes)
};

notesCtrl.createNotes = async (req, res) => {
    //TODO: #7 PRIVIAMENTE.....
    //creamos una nota nueva y recivimos nos datos.
    const {title, content, date, author} = req.body;
    const newNote = new Note({
        title: title,
        content: content,
        date: date,
        author: author
    });
    await newNote.save();
    res.json('POST nueva Note Saved')

};

notesCtrl.getNote = async (req, res) => { 
    const note = await Note.findById(req.params.id);
    res.json(note);
}

notesCtrl.updateNotes = async (req, res) => {
    const {title, content, author} = req.body;
    await Note.findOneAndUpdate({_id: req.params.id}, {
        title: title,
        author: author,
        content: content
    });
    /*
    await Note.findByIdAndUpdate(req.params.id, {
        title: title,
        author: author,
        content: content
    });*/
    res.json('PUT Note Actualizada')
}

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(res.params.id);
    res.json('DELETE Note')
}

module.exports = notesCtrl;