const ArticlesModel = require('../models/article')
const ArticlesRepository = require('../repositories/articles-repository')
const ObjectionOrmAdapter = require('../adapters/db/objection-orm-adapter')


const objectionOrmAdapter = new ObjectionOrmAdapter(ArticlesModel)
const repository = new ArticlesRepository(objectionOrmAdapter)


const index = async (req, res) => {
  const response = await repository.all()
  return res.json(response);
}

const create = async (req, res) => {
  const data = req.body
  try {
    const response = await repository.create(data)
    return res.json(response);
  } catch (error) {
    return res.status(400).json({ error: error })
  }
}

const update = async (req, res) => {
  const id = req.params.id
  const data = req.body
  try {
    const response = await repository.update(id, data)
    
    if (!response)
      return res.sendStatus(404)

    return res.sendStatus(201)
  } catch (error) {
    return res.status(400).json({ error })
  }
}

const remove = async (req, res) => {
  try {
    const response = await repository.remove(req.params.id)
    
    if (!response)
      return res.sendStatus(404)

    return res.sendStatus(201)
  } catch (error) {
    return res.status(400).json({ error })
  }
}

const find = async (req, res) => {
  const response = await repository.getById(req.params.id, req.user)
  
  if(!response){
    return res.sendStatus(404)
  }

  return res.json(response);
}

module.exports = {
  index,
  create,
  update,
  remove,
  find
}