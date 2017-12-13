exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('patients').del()
    .then(function() {
      // Inserts seed entries
      return knex('patients').insert([{
          "name": "Norma Shepard",
          "email": "Norma@Shepard.com",
          "gender": "female",
          "phone": "+1 (862) 587-2901",
          "birthdate": "1991-04-03T11:35:55",
          "enrolled": false,
          "picture": "http://placehold.it/32x32",
          "password": "$2a$10$5ddu6RXKKSWr3xxZ4qv2uuYmWe0gNF5Xpp7TZnsw4GJgcyAq9StiC"
        },
        {
          "name": "Wilkinson Calhoun",
          "email": "Wilkinson@Calhoun.com",
          "gender": "male",
          "phone": "+1 (896) 498-2772",
          "birthdate": "1998-12-17T01:12:21",
          "enrolled": true,
          "picture": "http://placehold.it/32x32",
          "password": "$2a$10$5ddu6RXKKSWr3xxZ4qv2uuYmWe0gNF5Xpp7TZnsw4GJgcyAq9StiC"
        },
        {
          "name": "Kathryn Duke",
          "email": "Kathryn@Duke.com",
          "gender": "female",
          "phone": "+1 (981) 465-3850",
          "birthdate": "1982-02-13T01:34:42",
          "enrolled": false,
          "picture": "http://placehold.it/32x32",
          "password": "$2a$10$5ddu6RXKKSWr3xxZ4qv2uuYmWe0gNF5Xpp7TZnsw4GJgcyAq9StiC"
        },
        {
          "name": "Holman Turner",
          "email": "Holman@Turner.com",
          "gender": "male",
          "phone": "+1 (803) 420-3222",
          "birthdate": "1986-06-03T10:03:16",
          "enrolled": true,
          "picture": "http://placehold.it/32x32",
          "password": "$2a$10$5ddu6RXKKSWr3xxZ4qv2uuYmWe0gNF5Xpp7TZnsw4GJgcyAq9StiC"
        },
        {
          "name": "Casandra Hensley",
          "email": "Casandra@Hensley.com",
          "gender": "female",
          "phone": "+1 (991) 483-2207",
          "birthdate": "1993-10-26T02:59:48",
          "enrolled": false,
          "picture": "http://placehold.it/32x32",
          "password": "$2a$10$5ddu6RXKKSWr3xxZ4qv2uuYmWe0gNF5Xpp7TZnsw4GJgcyAq9StiC"
        },
        {
          "name": "Tanya Todd",
          "email": "Tanya@Todd.com",
          "gender": "female",
          "phone": "+1 (807) 432-2833",
          "birthdate": "1967-02-12T04:57:49",
          "enrolled": true,
          "picture": "http://placehold.it/32x32",
          "password": "$2a$10$5ddu6RXKKSWr3xxZ4qv2uuYmWe0gNF5Xpp7TZnsw4GJgcyAq9StiC"
        },
        {
          "name": "Kara Barrett",
          "email": "Kara@Barrett.com",
          "gender": "female",
          "phone": "+1 (812) 468-2870",
          "birthdate": "1972-10-26T09:17:42",
          "enrolled": true,
          "picture": "http://placehold.it/32x32",
          "password": "$2a$10$5ddu6RXKKSWr3xxZ4qv2uuYmWe0gNF5Xpp7TZnsw4GJgcyAq9StiC"
        },
        {
          "name": "Marina Deleon",
          "gender": "female",
          "email": "Marina@Deleon.com",
          "phone": "+1 (868) 590-2950",
          "birthdate": "1995-11-30T01:19:54",
          "enrolled": false,
          "picture": "http://placehold.it/32x32",
          "password": "$2a$10$5ddu6RXKKSWr3xxZ4qv2uuYmWe0gNF5Xpp7TZnsw4GJgcyAq9StiC"
        },
        {
          "name": "Stuart Frazier",
          "email": "Stuart@Frazier.com",
          "gender": "male",
          "phone": "+1 (933) 564-2515",
          "birthdate": "1984-07-09T04:41:16",
          "enrolled": false,
          "picture": "http://placehold.it/32x32",
          "password": "$2a$10$5ddu6RXKKSWr3xxZ4qv2uuYmWe0gNF5Xpp7TZnsw4GJgcyAq9StiC"
        },
        {
          "name": "Nellie Velez",
          "email": "Nellie@Velez.com",
          "gender": "female",
          "phone": "+1 (846) 447-2231",
          "birthdate": "1984-07-26T10:23:04",
          "enrolled": false,
          "picture": "http://placehold.it/32x32",
          "password": "$2a$10$5ddu6RXKKSWr3xxZ4qv2uuYmWe0gNF5Xpp7TZnsw4GJgcyAq9StiC"
        },
        {
          "name": "Casey Mcfarland",
          "email": "Casey@Mcfarland.com",
          "gender": "male",
          "phone": "+1 (949) 564-2470",
          "birthdate": "1977-10-07T06:19:01",
          "enrolled": false,
          "picture": "http://placehold.it/32x32",
          "password": "$2a$10$5ddu6RXKKSWr3xxZ4qv2uuYmWe0gNF5Xpp7TZnsw4GJgcyAq9StiC"
        },
        {
          "name": "Gonzalez Bond",
          "email": "Gonzalez@Bond.com",
          "gender": "male",
          "phone": "+1 (973) 403-2159",
          "birthdate": "1973-03-02T08:03:06",
          "enrolled": true,
          "picture": "http://placehold.it/32x32",
          "password": "$2a$10$5ddu6RXKKSWr3xxZ4qv2uuYmWe0gNF5Xpp7TZnsw4GJgcyAq9StiC"
        },
        {
          "name": "Rae Daugherty",
          "email": "Rae@Daugherty.com",
          "gender": "female",
          "phone": "+1 (833) 570-3256",
          "birthdate": "1993-09-29T02:11:30",
          "enrolled": true,
          "picture": "http://placehold.it/32x32",
          "password": "$2a$10$5ddu6RXKKSWr3xxZ4qv2uuYmWe0gNF5Xpp7TZnsw4GJgcyAq9StiC"
        },
        {
          "name": "Flores Mosley",
          "email": "Flores@Mosley.com",
          "gender": "male",
          "phone": "+1 (932) 401-2365",
          "birthdate": "1986-07-31T12:04:09",
          "enrolled": false,
          "picture": "http://placehold.it/32x32",
          "password": "$2a$10$5ddu6RXKKSWr3xxZ4qv2uuYmWe0gNF5Xpp7TZnsw4GJgcyAq9StiC"
        },
        {
          "name": "Helena Rutledge",
          "email": "Helena@Rutledge.com",
          "gender": "female",
          "phone": "+1 (894) 498-2605",
          "birthdate": "1970-10-10T12:58:16",
          "enrolled": false,
          "picture": "http://placehold.it/32x32",
          "password": "$2a$10$5ddu6RXKKSWr3xxZ4qv2uuYmWe0gNF5Xpp7TZnsw4GJgcyAq9StiC"
        },
        {
          "name": "Thomas Levy",
          "email": "Thomas@Levy.com",
          "gender": "male",
          "phone": "+1 (916) 479-2055",
          "birthdate": "1966-04-28T02:47:53",
          "enrolled": true,
          "picture": "http://placehold.it/32x32",
          "password": "$2a$10$5ddu6RXKKSWr3xxZ4qv2uuYmWe0gNF5Xpp7TZnsw4GJgcyAq9StiC"
        },
        {
          "name": "Rush Stevens",
          "email": "Rush@Stevens.com",
          "gender": "male",
          "phone": "+1 (897) 554-2916",
          "birthdate": "1985-09-22T07:49:16",
          "enrolled": true,
          "picture": "http://placehold.it/32x32",
          "password": "$2a$10$5ddu6RXKKSWr3xxZ4qv2uuYmWe0gNF5Xpp7TZnsw4GJgcyAq9StiC"
        },
        {
          "name": "Dominique Murphy",
          "email": "Dominique@Murphy.com",
          "gender": "female",
          "phone": "+1 (884) 510-2335",
          "birthdate": "1977-03-07T09:29:48",
          "enrolled": false,
          "picture": "http://placehold.it/32x32",
          "password": "$2a$10$5ddu6RXKKSWr3xxZ4qv2uuYmWe0gNF5Xpp7TZnsw4GJgcyAq9StiC"
        },
        {
          "name": "Latoya Flores",
          "email": "Latoya@Flores.com",
          "gender": "female",
          "phone": "+1 (980) 454-2875",
          "birthdate": "1990-06-26T02:21:34",
          "enrolled": true,
          "picture": "http://placehold.it/32x32",
          "password": "$2a$10$5ddu6RXKKSWr3xxZ4qv2uuYmWe0gNF5Xpp7TZnsw4GJgcyAq9StiC"
        },
        {
          "name": "Patrick Hammond",
          "email": "Patrick@Hammond.com",
          "gender": "male",
          "phone": "+1 (971) 488-3763",
          "birthdate": "1988-02-02T01:41:38",
          "enrolled": true,
          "picture": "http://placehold.it/32x32",
          "password": "$2a$10$5ddu6RXKKSWr3xxZ4qv2uuYmWe0gNF5Xpp7TZnsw4GJgcyAq9StiC"
        }
      ]);
    });
};
