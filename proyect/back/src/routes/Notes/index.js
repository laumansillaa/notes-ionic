const router = require('express').Router();

router.post('/addNotes', require('./addNote'));
router.get('/detailNote/:id', require('./detailNote'));
router.get('/getNotes', require('./getNote'));
router.put('/updateNote/:id', require('./updateNote'));
router.delete('/deleteNote/:id', require('./deleteNote'));


module.exports = router;