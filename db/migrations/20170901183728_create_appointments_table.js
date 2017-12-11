exports.up = function(knex, Promise) {
  return knex.schema.createTable('appointments', function(table) {
    table.increments();
    table.integer('provider_id').notNullable().references('id').inTable('providers');
    table.integer('patient_id').notNullable().references('id').inTable('patients');
    table.string('chief_complaint').notNullable();
    table.text('illness_description').notNullable();
    table.timestamp('appt_date').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('appointments');
};
