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

// crear un post nuevo
const createPost = async ({ titulo, descripcion, categoria, autores_id }) => {
    const [result] = await db.query(`
        INSERT INTO post (titulo, descripcion, fecha_creacion, categoria, autores_id) 
        VALUES (?, ?, NOW(), ?, ?)`, 
        [titulo, descripcion, categoria, autores_id]
    );
    return result;
};

module.exports = { 
    selectAll,
    selectByID,
    createPost
}

