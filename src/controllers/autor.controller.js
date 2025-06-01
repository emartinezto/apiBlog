const Autor =  require('../models/autor.model');


const getAll = async (req, res) => {
    // Implement your logic here
    const autores = await Autor.selectAll();
    res.json(autores);
}

module.exports = { getAll }