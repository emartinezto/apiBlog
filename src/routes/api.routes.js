const router = require('express').Router();

// Define your routes here
router.use('/autores', require('./api/autores.routes'));
router.use('/post', require('./api/post.routes'));

module.exports = router;