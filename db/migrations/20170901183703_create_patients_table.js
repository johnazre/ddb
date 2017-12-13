exports.up = function(knex, Promise) {
  return knex.schema.createTable('patients', function(table) {
    table.increments();
    table.string('name');
    table.string('email').notNullable();
    table.string('phone');
    table.string('gender');
    table.string('birthdate');
    table.boolean('enrolled');
    table.string('picture');
    table.string('password').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('patients');
};
