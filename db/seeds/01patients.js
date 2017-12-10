exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('patients').del()
    .then(function () {
      // Inserts seed entries
      return knex('patients').insert([
        {
          photo_url: 'https://via.placeholder.com/150x150',
          name: 'John Johnson',
          phone: '555-5555',
          gender: 'male',
          birthday: '6/15/1975',
          enrolled: true
        },
        {
          photo_url: 'https://via.placeholder.com/150x150',
          name: 'Patricia Patterson',
          phone: '555-5555',
          gender: 'female',
          birthday: '8/13/1962',
          enrolled: true
        },
        {
          photo_url: 'https://via.placeholder.com/150x150',
          name: 'David Davidson',
          phone: '563-2467',
          gender: 'male',
          birthday: '2/23/1995',
          enrolled: true
        },
        {
          photo_url: 'https://via.placeholder.com/150x150',
          name: 'Matt Matthews',
          phone: '818-2842',
          gender: 'male',
          birthday: '7/17/1952',
          enrolled: true
        },
        {
          photo_url: 'https://via.placeholder.com/150x150',
          name: 'Mary Marigold',
          phone: '882-1982',
          gender: 'female',
          birthday: '9/1/1999',
          enrolled: true
        }
      ]);
    });
};
