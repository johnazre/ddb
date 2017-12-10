
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('appointments').del()
    .then(function () {
      // Inserts seed entries
      return knex('appointments').insert([
        {provider_id: 1, patient_id: 1, appt_date: new Date(2017, 1, 11)},
        {provider_id: 3, patient_id: 2, appt_date: new Date(2017, 4, 12)},
        {provider_id: 2, patient_id: 1, appt_date: new Date(2017, 6, 5)}
      ]);
    });
};
