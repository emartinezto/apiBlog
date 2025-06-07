const router = require('express').Router();

const { getAll, getByID, createAutor } = require('../../controllers/autores.controller');

const {checkAutoresID} = require('../../middlewares/autores.middlewares');

// GET de api/autores > Listar todos los autores
router.get('/', getAll);
// GET de api/autores/ID > Obtener un autor por ID
router.get('/:autorID', checkAutoresID, getByID);

// POST de api/autores > Crear un autor
router.post('/', createAutor)

module.exports = router;