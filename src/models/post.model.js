const db = require('../config/db');

// seleccionar todos los autores
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

module.exports = { 
    selectAll
}

