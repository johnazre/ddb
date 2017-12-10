
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('providers').del()
    .then(function () {
      // Inserts seed entries
      return knex('providers').insert([
        {name: 'Dr. Ted Mosby', address: '123 Main St', practice_name: 'Mosby Physicians'},
        {name: 'Dr. Eva Longoria', address: '123 Suave St', practice_name: 'No-Longor-Heavy Weight Loss Clinic'},
        {name: 'Dr. John Stevejoe', address: '123 Brew St', practice_name: 'The Booze Diet Clinic'}
      ]);
    });
};
