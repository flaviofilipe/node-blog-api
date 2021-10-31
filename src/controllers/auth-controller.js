const User = require('../models/user');
const AuthRepository = require('../repositories/auth-repository')
const ObjectionOrmAdapter = require('../adapters/db/objection-orm-adapter')

const objectionOrmAdapter = new ObjectionOrmAdapter(User)
const authRepository = new AuthRepository(objectionOrmAdapter)

const login = async (req, res) => {
  const { email, password } = req.body
  const userAuthenticated = await authRepository.login(email, password)

  if (userAuthenticated) {
    return res.status(200).send(userAuthenticated);
  }

  return res.status(500).send('Login inválido!');
}

const register = async (req, res) => {
  const { email, password, is_admin } = req.body
  const response = await authRepository.register({ email, password, is_admin })
  return res.json(response);
}

module.exports = {
  login,
  register
}