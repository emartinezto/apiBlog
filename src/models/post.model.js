const db = require('../config/db');

// seleccionar todos los post
const selectAll = async () => {
    const [result] = await db.query(`
        SELECT 
            post.id,
            post.titulo,
            post.descripcion,
            post.fecha_creacion,
            post.categoria,
            post.autores_id AS autor_id,
            autores.nombre AS autor_nombre,
            autores.email AS autor_email,
            autores.img AS autor_img
        FROM post
        JOIN autores ON post.autores_id = autores.id;
    `);
    return result;
};

// seleccionar el post segun su id
const selectByID = async (postId) => {
    const [result] = await db.query(`
        SELECT 
            post.id,
            post.titulo,
            post.descripcion,
            post.fecha_creacion,
            post.categoria,
            post.autores_id AS autor_id,
            autores.nombre AS autor_nombre,
            autores.email AS autor_email,
            autores.img AS autor_img
        FROM post
        JOIN autores ON post.autores_id = autores.id
        WHERE post.id = ?;`, [postId]);
    if (result.length === 0) return null;
    return result[0];
};

module.exports = { 
    selectAll,
    selectByID
}

