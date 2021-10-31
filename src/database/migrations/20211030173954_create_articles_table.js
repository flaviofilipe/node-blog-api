
exports.up = knex => knex.schema.createTable('articles', table => {
  table.increments('id')
  table.text('title').notNullable()
  table.text('summary').notNullable()
  table.text('firstParagraph').notNullable()
  table.text('body').notNullable()

  table.integer('category_id').unsigned()
  table.foreign('category_id')
    .references('categories.id')

  table.integer('author_id').unsigned()
  table.foreign('author_id')
    .references('authors.id')

  table.timestamp('created_at').default(knex.fn.now())
  table.timestamp('updated_at').default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable('articles')
