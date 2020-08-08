var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {t1: 'I Bims' });
});

module.exports = router;
