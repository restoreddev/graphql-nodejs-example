exports.up = function(knex, Promise) {
  return knex.schema.createTable('threads', function (table) {
    table.increments('id').primary();
    table.integer('userId').unsigned()
    table.foreign('userId').references('users.id')
    table.string('name');
    table.string('description');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('threads');
};
