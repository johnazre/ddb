exports.up = function(knex, Promise) {
  return knex.schema.createTable('patients', function(table) {
    table.increments();
    table.string('name');
    table.string('phone');
    table.string('gender');
    table.string('birthday');
    table.boolean('enrolled');
    table.string('photo_url');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('patients');
};
