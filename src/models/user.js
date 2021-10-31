const bcrypt = require('bcrypt');
const { Model } = require('objection');
const knex = require('../adapters/db/knex-config-adapter');

Model.knex(knex)

class Users extends Model {
  static get tableName() {
    return 'users';
  }

  async $beforeInsert() {
    this.password =  await bcrypt.hash(this.password, parseInt(process.env.JWT_SALT));
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['email', 'password'],

      properties: {
        id: { type: 'integer' },
        email: { type: 'string', minLength: 1, maxLength: 255 },
        password: { type: 'string', minLength: 1, maxLength: 255 },
        is_admin: { type: 'boolean' }
      },
    }
  }
}

module.exports = Users