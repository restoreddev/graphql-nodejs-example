const db = require('../../db');

exports.create = async function (parent, args) {
  const comment = await db.Comment.query().eager('user').insertAndFetch({
    userId,
    threadId,
    description,
  } = args);

  return comment;
};
