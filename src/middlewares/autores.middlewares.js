const Autores = require('../models/autores.model');

const checkAutoresID = async (req, res, next) => {
    const { autorID } = req.params;
    if (!autorID || isNaN(autorID)) {
        return res.status(400).json({ message: 'El ID del autor es inválido' });
    }
    const autor = await Autores.selectByID(autorID);
    if (!autor) {
        return res.status(404).json({ message: 'El ID del autor no existe' });
    }
    req.autor = autor;
    next();
}

module.exports = {
    checkAutoresID
}