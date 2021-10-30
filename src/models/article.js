const { Model } = require('objection');
const knex = require('../adapters/db/knex-config-adapter');

const Category = require('./category')

Model.knex(knex)

class Article extends Model {
  static get tableName() {
    return 'articles';
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
        tltle: { type: 'string', minLength: 1, maxLength: 255 },
        sumary: { type: 'string', minLength: 1, maxLength: 255 },
        firstParagraph: { type: 'string' },
        body: { type: 'string' },
      },
    }
  }

  static relationMappings = {
    category: {
      relation: Model.HasOneRelation,
      modelClass: Category,
      join: {
        from: 'articles.categoryId',
        to: 'category.id'
      }
    }
  }
}

module.exports = Article