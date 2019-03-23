const Model = require('../model');
const Comment = require('../comment');
const User = require('../user');

class Thread extends Model {
  static get tableName() {
    return 'threads';
  }

  static get relationMappings() {
    return {
      comments: {
        relation: Model.HasManyRelation,
        modelClass: Comment,
        join: {
          from: 'threads.id',
          to: 'comments.threadId'
        }
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'threads.userId',
          to: 'users.id'
        }
      }
    };
  }
}

module.exports = Thread;
