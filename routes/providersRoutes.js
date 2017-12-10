var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('providers').select().then(providers => res.send(providers));
});

module.exports = router;
