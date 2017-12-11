exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('providers').del()
    .then(function() {
      // Inserts seed entries
      return knex('providers').insert([{
          "name": "Dr. Alyssa Walters",
          "address": "990 Flatbush Avenue, Chesterfield, Oregon, 6700",
          "practice_name": "Trasola Family Practice"
        },
        {
          "name": "Dr. Frazier Fowler",
          "address": "942 Luquer Street, Onton, Idaho, 5719",
          "practice_name": "Andryx Family Practice"
        },
        {
          "name": "Dr. Oneill Fulton",
          "address": "194 Bowery Street, Dexter, Georgia, 418",
          "practice_name": "Centree Family Practice"
        },
        {
          "name": "Dr. Hilary Suarez",
          "address": "965 Mayfair Drive, Wheaton, Vermont, 5050",
          "practice_name": "Ovium Family Practice"
        },
        {
          "name": "Dr. Diane Mays",
          "address": "707 Autumn Avenue, Orviston, Rhode Island, 5385",
          "practice_name": "Gronk Family Practice"
        },
        {
          "name": "Dr. Cathryn Burnett",
          "address": "567 Bergen Street, Fillmore, Minnesota, 4670",
          "practice_name": "Nipaz Family Practice"
        },
        {
          "name": "Dr. Christina Gonzales",
          "address": "606 Varet Street, Cecilia, California, 3102",
          "practice_name": "Comtrak Family Practice"
        },
        {
          "name": "Dr. Jenifer Livingston",
          "address": "909 Goodwin Place, Shasta, Virgin Islands, 7732",
          "practice_name": "Geeknet Family Practice"
        },
        {
          "name": "Dr. Marcie Schroeder",
          "address": "583 Ocean Parkway, Collins, Illinois, 8224",
          "practice_name": "Scentric Family Practice"
        },
        {
          "name": "Dr. Patterson Ramos",
          "address": "225 Canal Avenue, Indio, District Of Columbia, 1864",
          "practice_name": "Mixers Family Practice"
        }
      ]);
    });
};
