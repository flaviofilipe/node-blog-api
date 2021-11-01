const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthRepository {
  constructor(dbAdapter) {
    this.dbAdapter = dbAdapter
  }

  async login(email, password) {
    const user = await this.findUserByEmailAndPassword(email, password)

    if (!user) return false

    const token = this.generateToken(user)
    return { token }
  }

  async findUserByEmailAndPassword(email, password) {
    const user = await this.dbAdapter.findUserByEmail(email)
    console.log(user)
    console.log('password', password)

    if (!user[0]) return false

    const passwordValid = await bcrypt.compare(password, user[0].password)
    if (!passwordValid) return false

    return user[0]
  }

  generateToken(user) {
    return jwt.sign({
      id: user.id,
      is_admin: user.is_admin,
      email: user.email
    }, process.env.SECRET, {
      expiresIn: process.env.JWT_EXPIRE
    });
  }

  async register(data) {
    return data
  }
}

module.exports = AuthRepository