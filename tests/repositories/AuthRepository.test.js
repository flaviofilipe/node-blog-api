const AuthRepository = require('../../src/repositories/auth-repository')
const { AuthDatabaseMock } = require('../mocks')
require('dotenv').config()
const jwt = require('jsonwebtoken')

const database = new AuthDatabaseMock()
const repository = new AuthRepository(database)

describe('AuthRepository', () => {
  test('should generate token', async () => {
    const response = await repository.generateToken(database.mockUser())
  })

  test('should login', async () => {
    const user = await database.mockUser()
    const response = await repository.login(user.email, 'secret_password')
    const tokenValidate = jwt.verify(response.token, process.env.SECRET);
    expect(tokenValidate.id).toBe(user.id)
  })

  test('should return false with invalid login', async () => {
    const user = await database.mockUser()
    const response = await repository.login(user.email, 'invalid_password')
    expect(response).toBe(false)
  })

  test('should create a new user', async () => {
    const user = await database.mockUser()
    const response = await repository.register(user)
    expect(response).toBe(user)
  })
})