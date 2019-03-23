const Model = require('../model');

class User extends Model {
  static get tableName() {
    return 'users';
  }
}

module.exports = User;
