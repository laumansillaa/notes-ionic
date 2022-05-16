const router = require('express').Router();

router.post('/addAlumn', require('./addAlumns'));
router.get('/getAllAlumns', require('./getAllAlumns'));
router.get('/detailAlumn/:id', require('./detailAlumns'))
router.put('/updateAlumn/:id', require('./updateAlumns'));


module.exports = router