const db = require('../config/db');

// SELECT * FORM autores
const selectAll = async () => {
    const [result] = await db.query('SELECT * FROM autores');
    return result;
};

// SELECT * FROM autores WHERE id = 3
const selectByID = async (autorId) => {
    const [result] = await db.query('SELECT * FROM autores WHERE id = ?', [autorId]);
    if (result.length === 0) return null;
    return result[0];
};

const createAutor = async ({ nombre, email, img }) => {
    const [result] = await db.query(`insert into autores (nombre, email, img ) values (?, ?, ?)`, [nombre, email, img])
    return result;
}

module.exports = {
    selectAll,
    selectByID,
    createAutor
}

