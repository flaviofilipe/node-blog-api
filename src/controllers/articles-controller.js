const ArticlesModel = require('../models/article')
const ArticlesRepository = require('../repositories/articles-repository')
const ObjectionOrmAdapter = require('../adapters/db/objection-orm-adapter')


const objectionOrmAdapter = new ObjectionOrmAdapter(ArticlesModel)
const articlesRepository = new ArticlesRepository(objectionOrmAdapter)


const index = async (req, res) => {
  const response = await articlesRepository.all()
  return res.json(response);
}

const create = async (req, res) => {
  const { name, pictureUrl } = req.body
  const response = await articlesRepository.create({ name, pictureUrl })
  return res.json(response);
}

const update = async (req, res) => {
  const { id, name, pictureUrl } = req.body
  const response = await articlesRepository.update({ id, name, pictureUrl })
  return res.json(response);
}

const remove = async (req, res) => {
  const response = await articlesRepository.remove(req.params.id)
  return res.json(response);
}

const find = async (req, res) => {
  const response = await articlesRepository.getById(req.params.id)
  return res.json(response);
}

module.exports = {
  index,
  create,
  update,
  remove,
  find
}