const router = require('express').Router();

router.post('/addAlumn', require('./addAlumns'));
router.get('/getAllAlumns', require('./getAllAlumns'));
router.get('/detailAlumn/:id', require('./detailAlumns'))
router.put('/updateAlumn/:id', require('./updateAlumns'));
router.delete('/deleteAlumn/:id', require('./deleteAlumn'));


module.exports = router