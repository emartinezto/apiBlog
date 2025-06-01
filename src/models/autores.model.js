const db = require('../config/db');

// SELECT * FORM autores
const selectAll = async () => {
    const [result] = await db.query('SELECT * FROM autores');
    return result;
};

module.exports = {
    selectAll
}

