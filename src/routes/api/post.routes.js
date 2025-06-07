const router = require('express').Router();

const { getAll, getByID, createPost } = require('../../controllers/post.controller');

const {checkPostID, validatePostBody} = require('../../middlewares/post.middlewares');

// GET de /api/post > Listar todos los posts con los datos del autor incluidos (JOIN)
router.get('/', getAll);
// GET de api/post/ID > Obtener un post por ID
router.get('/:postID', checkPostID, getByID);

// POST de api/post > Crear un post
router.post('/', validatePostBody, createPost);

module.exports = router;