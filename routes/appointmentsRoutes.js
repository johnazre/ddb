var express = require('express')
var router = express.Router()
var knex = require('../db/knex')
var populate = require('../lib')
var chain = require('../lib/chain')

/* GET all appointments. */
router.get('/', function(req, res, next) {
  chain(knex, 'appointments')
    .find()
    .populate('providers', 'provider_id', 'provider')
    .populate('patients', 'patient_id', 'patient')
    .orderBy('appt_date', req.query.filter)
    .exec()
    .then(results => res.send(results))
    .catch(err => console.log('err', err))
})

router.post('/', (req, res) => {
  let { provider_id, patient_id, appt_date } = req.body
  let { year, month, day, hours, minutes } = dateStringParse(appt_date)
  let modifiedDate = new Date(year, month-1, day, hours, minutes)
  let newAppt = {
    provider_id,
    patient_id,
    appt_date: modifiedDate
  }
  knex('appointments')
    .insert(newAppt)
    .returning('*')
    .then(appt => res.json(appt))
})

module.exports = router;

function dateStringParse(str) {
  str = str.split(' ')
  let date = str[0].split('-')
  let time = str[1].split(':')
  return {
    year: date[0],
    month: date[1],
    day: date[2],
    hours: time[0],
    minutes: time[1]
  };
}
