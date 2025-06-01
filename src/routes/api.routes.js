const router = require('express').Router();

// Define your routes here
router.use('/autor', require('./api/autor.routes'));

module.exports = router;