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

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['userId', 'threadId', 'description'],
      properties: {
        id: { type: 'integer' },
        userId: { type: 'integer' },
        threadId: { type: 'integer' },
        description: { type: 'string', minLength: 1, maxLength: 255 }
      }
    };
  }
}

module.exports = Comment;
