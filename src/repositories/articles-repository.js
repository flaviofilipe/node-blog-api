const Respository = require('./repository')

class ArticlesRepository extends Respository {
  async all(user) {
    const join = '[category as c, author as a]'
    const select = [
      'c.name as category',
      'a.name as author_name', 'a.pictureUrl as author_image',
      'title',
      'summary',
    ]

    return await this.dbAdapter.all(select, join)
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
