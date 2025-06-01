const router = require('express').Router();

const { getAll } = require('../../controllers/autor.controller');

// GET de api/autor > Listar todos los autores
router.get('/', getAll)

module.exports = router;