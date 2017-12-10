exports.up = function(knex, Promise) {
  return knex.schema.createTable('providers', function(table) {
    table.increments();
    table.string('name');
    table.string('address');
    table.string('practice_name');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('providers');
};
