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

const validateAuthorBody = (req, res, next) => {
    const { nombre, email, img } = req.body;

    if (!nombre || !email || !img) {
        return res.status(400).json({message: 'Faltan campos obligatorios: nombre, email e img son requeridos.'});
    }

    if (typeof nombre !== 'string' || nombre.trim() === '') {
        return res.status(400).json({ message: 'El nombre debe ser un texto válido.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'El email no es válido.' });
    }

    if (typeof img !== 'string' || img.trim() === '') {
        return res.status(400).json({ message: 'La imagen debe ser una URL o ruta válida.' });
    }

    next();
};

const checkAuthorHasPosts = async (req, res, next) => {
    const autorID = req.autor.id;
    const posts = await Autores.getPostsByAuthorIDFromDB(autorID);

    if (!posts || posts.length === 0) {
        return res.status(404).json({
            message: 'Este autor no tiene posts publicados.'
        });
    }

    req.posts = posts;
    next();
};

module.exports = {
    checkAutoresID,
    validateAuthorBody,
    checkAuthorHasPosts
}