var express = require('express');
var router = express.Router();

/**
 * the main page of the server when connecting to localhost:3000
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
