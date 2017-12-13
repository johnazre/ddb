const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt-nodejs')
const passportConfig = require('../lib/auth')
const passport = require('passport')

const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignin = passport.authenticate('local', { session: false })

/* GET home page. */
router.get('/', requireAuth, function(req, res, next) {
  res.send('you got past it');
});

router.post('/signup', function(req, res) {
  let email = req.body.email
  let password = req.body.password

  if(!email || !password) {
    return res.status(422).send({error: 'You must provide an email and password'})
  }

  knex('patients').select().where('email', email)
    .then(patient => {
      if(patient.length > 0){
        res.status(422).send({ error: 'Email is in use'})
      } else {
        var hash = bcrypt.hashSync(password);
        knex('patients').insert({ email, password: hash }).returning('*')
          .then(patient => res.json({ token: tokenForUser(patient) }))
      }
    })
});

router.post('/login', requireSignin, function(req, res) {
  res.send({ token: tokenForUser(req.user)})
});

function tokenForUser(user) {
  console.log('user in tokenForUser', user);
  const timestamp = new Date().getTime()
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.SECRET_STRING)
}

module.exports = router;
