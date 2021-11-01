const Respository = require('./repository')

class ArticlesRepository extends Respository {
  async all({ category }) {
    let filter = null
    const join = '[category as c, author as a]'
    const select = [
      'c.name as category',
      'a.name as author_name', 'a.pictureUrl as author_image',
      'title',
      'summary',
    ]

    if(category)
      filter = ['c.name', 'like', `%${category}%`]

    return await this.dbAdapter.all(select, join, filter)
  }

  async getById(id, user) {
    let join = '[category as c, author as a]'
    const select = [
      'c.name as category',
      'a.name as author_name', 'a.pictureUrl as author_image',
      'title',
      'summary',
      'body'
    ]

    const article = await this.dbAdapter.getById(id, select, join)

    if (!article) return false

    const response = {
      author: {
        name: article.author_name,
        picture: article.author_image,
      },
      category: article.category,
      title: article.title,
      summary: article.summary
    }

    if (user) response.body = article.body

    return response
  }
}

module.exports = ArticlesRepository
