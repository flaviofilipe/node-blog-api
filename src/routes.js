const express = require('express')
const routes = express.Router()

const {AuthorsController, ArticlesController} = require('./controllers')


routes.route('/authors')
    .get(AuthorsController.index)
    .post(AuthorsController.create)
routes.route('/authors/:id')
    .put(AuthorsController.update)
    .delete(AuthorsController.remove)
    .get(AuthorsController.find)

routes.route('/articles')
    .get(ArticlesController.index)
    .post(ArticlesController.create)
routes.route('/articles/:id')
    .put(ArticlesController.update)
    .delete(ArticlesController.remove)


module.exports = routes