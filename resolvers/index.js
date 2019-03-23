const threads = require('./threads');
const comments = require('./comments');

module.exports = {
  Query: {
    threads: threads.all,
    thread: threads.findOne,
  },
  Mutation: {
    createThread: threads.create,
    createComment: comments.create,
  }
};
