const router = require('express').Router();

const { getAll, getByID, createAutor, getPostsByAuthorID } = require('../../controllers/autores.controller');

const {checkAutoresID, validateAuthorBody, checkAuthorHasPosts} = require('../../middlewares/autores.middlewares');

// GET de api/autores > Listar todos los autores
router.get('/', getAll);
// GET de api/autores/ID > Obtener un autor por ID
router.get('/:autorID', checkAutoresID, getByID);

// POST de api/autores > Crear un autor
router.post('/', validateAuthorBody, createAutor)

// GET /api/autores/:id/posts > Obtener todos los posts escritos por ese autor
router.get('/:autorID/posts', checkAutoresID, checkAuthorHasPosts, getPostsByAuthorID)

module.exports = router;