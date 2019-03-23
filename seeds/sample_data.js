exports.seed = async function(knex, Promise) {
  await knex('users').del();
  await knex('users').insert([
    {id: 1, firstName: 'Test', lastName: 'User 1', userName: 'testuser1' },
    {id: 2, firstName: 'Test', lastName: 'User 2', userName: 'testuser2' },
  ]);

  await knex('threads').del();
  await knex('threads').insert([
    {id: 1, userId: 1, name: 'Thread 1', description: 'This is the first thread' },
    {id: 2, userId: 2, name: 'Thread 2', description: 'This is the second thread' },
  ]);

  await knex('comments').del();
  await knex('comments').insert([
    {id: 1, userId: 2, threadId: 1, description: 'This is a comment on the first thread' },
    {id: 2, userId: 1, threadId: 2, description: 'This is a comment on the second thread' },
  ]);

  return Promise.resolve();
};
