
exports.up = knex => knex.schema.createTable('authors', table => {
  table.increments('id')
  table.text('name').unique().notNullable()
  table.text('pictureUrl').notNullable()

  table.timestamp('created_at').default(knex.fn.now())
  table.timestamp('updated_at').default(knex.fn.now())
})


exports.down = knex => knex.schema.dropTable('authors')
