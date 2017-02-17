var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/locations');
var labsix = require('../controllers/labsix');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/pageone', labsix.index);
router.get('/pagetwo', labsix.index2);
module.exports = router;
