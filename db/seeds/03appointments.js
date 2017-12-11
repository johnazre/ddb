exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('appointments').del()
    .then(function() {
      // Inserts seed entries
      return knex('appointments').insert([{
          "patient_id": 3,
          "provider_id": 4,
          "appt_date": "2017-04-22T10:25:20 +07:00",
          "chief_complaint": "nausea",
          "illness_description": "In consectetur eiusmod ipsum veniam."
        },
        {
          "patient_id": 1,
          "provider_id": 6,
          "appt_date": "2016-09-30T06:16:37 +07:00",
          "chief_complaint": "sore throat",
          "illness_description": "Anim qui ad elit qui ad reprehenderit."
        },
        {
          "patient_id": 4,
          "provider_id": 5,
          "appt_date": "2016-04-13T09:11:29 +07:00",
          "chief_complaint": "shortness of breath",
          "illness_description": "Sint in labore dolore veniam tempor consectetur cupidatat cupidatat."
        },
        {
          "patient_id": 3,
          "provider_id": 6,
          "appt_date": "2017-08-05T08:17:06 +07:00",
          "chief_complaint": "shortness of breath",
          "illness_description": "Adipisicing qui do labore ad consectetur dolor mollit excepteur."
        },
        {
          "patient_id": 2,
          "provider_id": 9,
          "appt_date": "2016-02-03T07:40:43 +07:00",
          "chief_complaint": "back pain",
          "illness_description": "Nisi duis veniam ex cillum nulla labore eu est."
        },
        {
          "patient_id": 3,
          "provider_id": 7,
          "appt_date": "2016-09-21T02:37:15 +07:00",
          "chief_complaint": "back pain",
          "illness_description": "Sint ullamco aliquip consequat pariatur."
        },
        {
          "patient_id": 5,
          "provider_id": 6,
          "appt_date": "2017-08-12T01:57:41 +07:00",
          "chief_complaint": "cough",
          "illness_description": "Amet deserunt nisi exercitation quis et velit culpa Lorem nulla."
        },
        {
          "patient_id": 4,
          "provider_id": 2,
          "appt_date": "2016-08-19T04:35:34 +07:00",
          "chief_complaint": "shortness of breath",
          "illness_description": "Excepteur voluptate officia incididunt exercitation qui."
        },
        {
          "patient_id": 1,
          "provider_id": 10,
          "appt_date": "2017-05-30T12:25:52 +07:00",
          "chief_complaint": "cough",
          "illness_description": "Dolor non eiusmod occaecat proident cillum voluptate quis nostrud."
        },
        {
          "patient_id": 1,
          "provider_id": 4,
          "appt_date": "2017-03-20T08:56:07 +07:00",
          "chief_complaint": "nausea",
          "illness_description": "Id sint fugiat voluptate enim aute dolore sunt et esse et eu id."
        },
        {
          "patient_id": 3,
          "provider_id": 3,
          "appt_date": "2017-06-30T09:21:13 +07:00",
          "chief_complaint": "cough",
          "illness_description": "Eu nostrud magna tempor aliqua aliqua quis veniam incididunt commodo reprehenderit occaecat."
        },
        {
          "patient_id": 1,
          "provider_id": 8,
          "appt_date": "2017-04-29T02:55:44 +07:00",
          "chief_complaint": "sore throat",
          "illness_description": "Culpa magna aliqua Lorem pariatur quis consectetur sint ut."
        },
        {
          "patient_id": 5,
          "provider_id": 1,
          "appt_date": "2017-01-04T05:40:39 +07:00",
          "chief_complaint": "back pain",
          "illness_description": "Lorem reprehenderit incididunt do reprehenderit exercitation laboris Lorem excepteur ullamco."
        },
        {
          "patient_id": 4,
          "provider_id": 7,
          "appt_date": "2017-01-13T06:57:54 +07:00",
          "chief_complaint": "back pain",
          "illness_description": "Dolor ipsum nulla adipisicing fugiat ullamco anim minim est irure adipisicing ut Lorem esse pariatur."
        },
        {
          "patient_id": 2,
          "provider_id": 7,
          "appt_date": "2016-03-30T03:26:38 +07:00",
          "chief_complaint": "shortness of breath",
          "illness_description": "Sit labore in consectetur elit et reprehenderit veniam."
        },
        {
          "patient_id": 2,
          "provider_id": 1,
          "appt_date": "2016-04-15T09:03:42 +07:00",
          "chief_complaint": "chest pain",
          "illness_description": "Aliqua incididunt adipisicing ea dolor eiusmod amet duis cillum eu consequat."
        },
        {
          "patient_id": 1,
          "provider_id": 10,
          "appt_date": "2016-11-11T01:18:12 +07:00",
          "chief_complaint": "shortness of breath",
          "illness_description": "Exercitation ex aliqua laborum dolor ea non quis laborum minim ullamco cupidatat."
        },
        {
          "patient_id": 2,
          "provider_id": 9,
          "appt_date": "2016-07-31T03:52:41 +07:00",
          "chief_complaint": "cough",
          "illness_description": "Consectetur velit cillum exercitation aliqua ipsum ex quis nulla incididunt ut."
        },
        {
          "patient_id": 1,
          "provider_id": 10,
          "appt_date": "2016-07-03T11:10:15 +07:00",
          "chief_complaint": "sore throat",
          "illness_description": "Excepteur ipsum ut cillum irure culpa sint aute esse exercitation dolor proident qui laborum officia."
        },
        {
          "patient_id": 1,
          "provider_id": 5,
          "appt_date": "2016-05-06T10:53:57 +07:00",
          "chief_complaint": "shortness of breath",
          "illness_description": "Ea adipisicing pariatur in esse cillum amet dolore aute aute proident elit proident nisi."
        }
      ]);
    });
};
