const router = require('express').Router();

// Define your routes here
router.use('/autores', require('./api/autores.routes'));

module.exports = router;