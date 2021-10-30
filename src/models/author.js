const { Model } = require('objection');
const knex = require('../adapters/db/knex-config-adapter');

Model.knex(knex)

class Author extends Model {
  static get tableName() {
    return 'authors';
  }

  $beforeUpdate() {
    this.updated_at = new Date()
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'pictureUrl'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        pictureUrl: { type: 'string', minLength: 1, maxLength: 255 },
      },
    }
  }
}

module.exports = Author