const Autores =  require('../models/autores.model');


const getAll = async (req, res) => {
    const autores = await Autores.selectAll();
    res.json(autores);
}

const getByID = async (req, res) => {
    res.json(req.autor);
}

const createAutor = async (req, res) => {
    const result = await Autores.createAutor(req.body);
    const newAutor = await Autores.selectByID(result.insertId);
    res.json(newAutor);
}

const getPostsByAuthorID = async (req, res) => {
    res.json(req.posts);
}


module.exports = { 
    getAll, 
    getByID, 
    createAutor,
    getPostsByAuthorID 
}