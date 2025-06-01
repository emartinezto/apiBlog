const router = require('express').Router();

const { getAll } = require('../../controllers/autores.controller');

// GET de api/autores > Listar todos los autores
router.get('/', getAll)

module.exports = router;