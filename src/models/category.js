const { Model } = require('objection');
const knex = require('../adapters/db/knex-config-adapter');

Model.knex(knex)

class Category extends Model {
  static get tableName() {
    return 'category';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 }
      },
    }
  }
}

module.exports = Category