class Repository {
    constructor(dbAdapter) {
        this.dbAdapter = dbAdapter
    }

    async all(item) {
        const response = this.dbAdapter.all(item)
        return response
    }

    async getById(itemId) {
        const response = this.dbAdapter.getById(itemId)
        return response
    }

    async create(item) {
        const response = this.dbAdapter.create(item)
        return response
    }

    async update(item) {
        const response = this.dbAdapter.update(item)
        return response
    }

    async remove(item) {
        const response = this.dbAdapter.remove(item)
        return response
    }
}

module.exports = Repository
