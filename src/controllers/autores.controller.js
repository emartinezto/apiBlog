const Autores =  require('../models/autores.model');


const getAll = async (req, res) => {
    const autores = await Autores.selectAll();
    res.json(autores);
}

const getByID = async (req, res) => {
    console.log(req.autor);
    // const { autorID } = req.params;
    // const autorByID = await Autores.selectByID(autorID);
    // if(!autorByID) return res.status(404).json({message: 'El ID del restaurante no existe'});
    res.json(req.autor);
}

const createAutor = async (req, res) => {
    const result = await Autores.createAutor(req.body);
    const newAutor = await Autores.selectByID(result.insertId);
    res.json(newAutor);
}


module.exports = { 
    getAll, 
    getByID, 
    createAutor 
}