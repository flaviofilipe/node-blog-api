const { Model } = require('objection');
const knex = require('../adapters/db/knex-config-adapter');

const Category = require('./category')
const Author = require('./author')

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
      required: ['title', 'summary', 'firstParagraph', 'body'],

      properties: {
        id: { type: 'integer' },
        tltle: { type: 'string', minLength: 1, maxLength: 255 },
        summary: { type: 'string', minLength: 1, maxLength: 255 },
        firstParagraph: { type: 'string' },
        body: { type: 'string' },
      },
    }
  }

  static relationMappings = {
    category: {
      relation: Model.BelongsToOneRelation,
      modelClass: Category,
      join: {
        from: 'articles.category_id',
        to: 'categories.id'
      },
    },

    author: {
      relation: Model.BelongsToOneRelation,
      modelClass: Author,
      join: {
        from: 'articles.author_id',
        to: 'authors.id'
      }
    }
  }
}

module.exports = Article