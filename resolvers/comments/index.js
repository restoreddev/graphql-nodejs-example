const db = require('../../db');

exports.create = async function (parent, args) {
  const comment = await db.Comment.query().insert({
    userId,
    threadId,
    description,
  } = args);
  const thread = await db.Thread.query().eager('[user,comments.[user]]').findOne('id', args.threadId);

  return thread;
};
