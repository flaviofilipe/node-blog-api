const bcrypt = require('bcrypt')
const User = require('../../models/user')
require('dotenv').config()

    
exports.seed = async knex => {
  await knex('users').del()
  await User.query().insert({
      email: 'admin@admin.com',
      password: 'admin',
      is_admin: true
  })
};
