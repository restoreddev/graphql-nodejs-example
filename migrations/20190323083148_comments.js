exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function (table) {
    table.increments('id').primary();
    table.integer('userId').unsigned()
    table.foreign('userId').references('users.id')
    table.integer('threadId').unsigned()
    table.foreign('threadId').references('threads.id')
    table.string('description');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
