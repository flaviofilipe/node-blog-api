const AuthorsModel = require('../models/author')
const AuthorRepository = require('../repositories/author-repository')
const ObjectionOrmAdapter = require('../adapters/db/objection-orm-adapter')


const objectionOrmAdapter = new ObjectionOrmAdapter(AuthorsModel)
const authorRepository = new AuthorRepository(objectionOrmAdapter)


const index = async (req, res) => {
  const response = await authorRepository.all()
  return res.json(response);
}

const create = async (req, res) => {
  const { name, pictureUrl } = req.body
  const response = await authorRepository.create({ name, pictureUrl })
  return res.json(response);
}

const update = async (req, res) => {
  const { id, name, pictureUrl } = req.body
  const response = await authorRepository.update({ id, name, pictureUrl })
  return res.json(response);
}

const remove = async (req, res) => {
  const response = await authorRepository.remove(req.params.id)
  return res.json(response);
}

const find = async (req, res) => {
  const response = await authorRepository.getById(req.params.id)
  return res.json(response);
}

module.exports = {
  index,
  create,
  update,
  remove,
  find
}