
exports.up = knex => knex.schema.createTable('categories', table => {
  table.increments('id')
  table.text('name').unique().notNullable()
})


exports.down = knex => knex.schema.dropTable('categories')
