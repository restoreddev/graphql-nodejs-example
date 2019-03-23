const db = require('../../db');

exports.all = async function () {
  const threads = await db.Thread.query().eager('[comments.[user], user]');

  return threads;
};

exports.findOne = async function (parent, args) {
  const thread = await db.Thread.query().eager('[comments.[user], user]').findOne('id', args.id);

  return thread;
};

exports.create = async function (parent, args) {
  const thread = await db.Thread.query().eager('user').insertAndFetch({
    userId,
    name,
    description,
  } = args);
  thread.comments = [];

  return thread;
};
