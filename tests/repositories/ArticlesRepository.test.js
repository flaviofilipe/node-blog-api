const ArticlesRepository = require('../../src/repositories/articles-repository')
const { ArticlesDatabaseMock } = require('../mocks')


const database = new ArticlesDatabaseMock()
const repository = new ArticlesRepository(database)

describe('ArticlesRepository', () => {
    test('should get all articles', async () => {
        const articles = await repository.all()
        expect(articles.length).toBe(3)
    })
    test('should get article by id', async () => {
        const article = await repository.getById(1)
        expect(typeof(article.title)).toBe('string')
    })
    test('should not found article by id', async () => {
        const article = await repository.getById(2)
        expect(article).toEqual(false)
    })
    test('should create article ', async () => {
        const params = {
            name: "article 1",
            pictureUrl: "img.png"
        }
        const article = await repository.create(params)
        expect(article.id).toBe(1)
    })
    test('should update article ', async () => {
        const params = {
            name: "article 1",
            pictureUrl: "img.png"
        }
        const article = await repository.update(params)
        expect(article).toBe(true)
    })
    test('should delete article ', async () => {
        const article = await repository.remove(1)
        expect(article).toBe(1)
    })
})
