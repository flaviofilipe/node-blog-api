
exports.up = knex => knex.schema.createTable('users', table => {
  table.increments('id')
  table.text('email').unique().notNullable()
  table.text('password').notNullable()
  table.boolean('is_admin').notNullable().defaultTo(false)
})


exports.down = knex => knex.schema.dropTable('users')
