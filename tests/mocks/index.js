const { PgAdapterSpy } = require('./db-adapter')
const { ArticlesDatabaseMock } = require('./articles-database-mock')
const { AuthDatabaseMock } = require('./auth-database-mock')

module.exports = {
    PgAdapterSpy,
    ArticlesDatabaseMock,
    AuthDatabaseMock
}