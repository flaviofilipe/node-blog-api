const AuthorRepository = require('../../src/repositories/author-repository')
const { PgAdapterSpy } = require('../mocks')


const database = new PgAdapterSpy()
const repository = new AuthorRepository(database)

describe('AuthorRepository', () => {
    test('should get all authors', async () => {
        const authors = await repository.all()
        expect(authors.length).toBe(3)
    })
    test('should get author by id', async () => {
        const author = await repository.getById(1)
        expect(author.id).toBe(1)
    })
    test('should not found author by id', async () => {
        const author = await repository.getById(2)
        expect(author).toEqual(false)
    })
    test('should create author ', async () => {
        const params = {
            name: "author 1",
            pictureUrl: "img.png"
        }
        const author = await repository.create(params)
        expect(author.id).toBe(1)
    })
    test('should update author ', async () => {
        const params = {
            name: "author 1",
            pictureUrl: "img.png"
        }
        const author = await repository.update(params)
        expect(author).toBe(true)
    })
    test('should delete author ', async () => {
        const author = await repository.remove(1)
        expect(author).toBe(1)
    })
})
