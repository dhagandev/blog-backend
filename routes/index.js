var express = require('express');
var router = express.Router();
var testCtrl = require('../controllers/testController')

/* GET home page. */
router.get('/', testCtrl.testFunction);

module.exports = router;
