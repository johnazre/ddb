var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mig', function(req, res) {
  knex.migrate.latest()
    .then(function() {
      return knex.seed.run();
    })
    .then(function() {
      // migrations are finished
      res.send('done');
    });
});

module.exports = router;
