const faker = require('faker')
const { PgAdapterSpy } = require('./db-adapter')

class ArticlesDatabaseMock extends PgAdapterSpy {
  async all() {
    return [
      { title: faker.random.words(5) },
      { title: faker.random.words(5) },
      { title: faker.random.words(5) }
    ]
  }

  async getById(id) {
    if (id == 1)
      return { title: faker.random.words(5) }
    return false
  }
}

module.exports = {
  ArticlesDatabaseMock
}