var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('indexnew', {t1: 'I Bims' });
});

module.exports = router;
