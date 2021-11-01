const faker = require('faker')
const bcrypt = require('bcrypt');

class AuthDatabaseMock {

  async findUserByEmail(email) {
    const user = await this.mockUser()
    return [user]
  }

  async create(data){
    const user = await this.mockUser()
    return user
  }

  async mockAdminUser() {
    const password = await this.getPassword()
    return {
      id: 2,
      email: faker.internet.email(),
      password,
      is_admin: true
    }
  }

  async mockUser() {
    const password = await this.getPassword()
    return {
      id: 2,
      email: faker.internet.email(),
      password,
      is_admin: false
    }
  }

  getPassword() {
    return bcrypt.hash('secret_password', parseInt(process.env.JWT_SALT));
  }

}

module.exports = {
  AuthDatabaseMock
}