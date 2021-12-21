const express = require('express')
const routes = express.Router()
const { authenticatedMiddleware, onlyAdminUser } = require('./middlewares/auth')

const { AuthorsController, ArticlesController, Auth } = require('./controllers')

routes.route('/api/authors')
  .get(onlyAdminUser, AuthorsController.index)
  .post(onlyAdminUser, onlyAdminUser, AuthorsController.create)
routes.route('/authors/:id')
  .put(onlyAdminUser, AuthorsController.update)
  .delete(onlyAdminUser, AuthorsController.remove)
  .get(onlyAdminUser, AuthorsController.find)

routes.route('/api/articles')
  .get(ArticlesController.index)
  .post(onlyAdminUser, ArticlesController.create)
routes.route('/api/articles/:id')
  .put(onlyAdminUser, ArticlesController.update)
  .delete(onlyAdminUser, ArticlesController.remove)
  .get(authenticatedMiddleware, ArticlesController.find)

routes.post('/api/login', Auth.login)
routes.post('/api/sign-up', Auth.register)

module.exports = routes