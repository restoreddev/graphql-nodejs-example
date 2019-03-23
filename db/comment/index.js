const Model = require('../model');
const User = require('../user');

class Comment extends Model {
  static get tableName() {
    return 'comments';
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'comments.userId',
          to: 'users.id'
        }
      }
    };
  }
}

module.exports = Comment;
