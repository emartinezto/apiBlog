const Post = require('../models/post.model');

const checkPostID = async (req, res, next) => {
    const { postID } = req.params;

    if (!postID || isNaN(postID)) {
        return res.status(400).json({ message: 'El ID del post es inválido' });
    }

    const post = await Post.selectByID(postID);
    if (!postID) {
        return res.status(404).json({ message: 'El ID del post no existe' });
    }

    req.post = post;
    
    next();
}

const validatePostBody = (req, res, next) => {
    const { titulo, descripcion, categoria, autores_id } = req.body;

    if (!titulo || !descripcion || !categoria || !autores_id) {
        return res.status(400).json({
            message: 'Faltan campos obligatorios: titulo, descripcion, categoria y autores_id son requeridos.'
        });
    }

    if (typeof titulo !== 'string' || titulo.trim() === '') {
        return res.status(400).json({ message: 'El título debe ser un texto válido.' });
    }

    if (typeof descripcion !== 'string' || descripcion.trim() === '') {
        return res.status(400).json({ message: 'La descripción debe ser un texto válido.' });
    }

    if (typeof categoria !== 'string' || categoria.trim() === '') {
        return res.status(400).json({ message: 'La categoría debe ser un texto válido.' });
    }

    if (isNaN(autores_id)) {
        return res.status(400).json({ message: 'El ID del autor debe ser un número válido.' });
    }

    next();
};

module.exports = {
    checkPostID,
    validatePostBody
}