const router = require('express').Router();

const {getAll } = require('../../controllers/post.controller')

// GET de /api/post > Listar todos los posts con los datos del autor incluidos (JOIN)
router.get('/', getAll);

module.exports = router;