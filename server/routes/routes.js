var express = require('express');
var router = express.Router();

// var IndexPage = require('../controllers/IndexPageController.js');
var db = require('../models/ExampleDbConnection').getDb();
router.get('/', function(req, res, next) {
    console.log(db);
    res.render('index');
});

module.exports = router;
