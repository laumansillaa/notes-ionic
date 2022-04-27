const router = require('express').Router();

router.get('/addNotes', require('./addNote'));


module.exports = router;