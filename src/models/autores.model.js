const db = require('../config/db');

// seleccionar todos los autores
const selectAll = async () => {
    const [result] = await db.query('SELECT * FROM autores');
    return result;
};

// seleccionar el autor segun su id
const selectByID = async (autorId) => {
    const [result] = await db.query('SELECT * FROM autores WHERE id = ?', [autorId]);
    if (result.length === 0) return null;
    return result[0];
};

// crear un autor nuevo
const createAutor = async ({ nombre, email, img }) => {
    const [result] = await db.query(`insert into autores (nombre, email, img ) values (?, ?, ?)`, [nombre, email, img])
    return result;
}

// seleccionar todos los post escritos por un autor.
const getPostsByAuthorIDFromDB = async (autorID) => {
    const [result] = await db.query(`
        SELECT post.*, autores.nombre, autores.email, autores.img
        FROM post
        JOIN autores ON post.autores_id = autores.id
        WHERE autores.id = ?
    `, [autorID]);

    return result;
};


module.exports = {
    selectAll,
    selectByID,
    createAutor,
    getPostsByAuthorIDFromDB
}

