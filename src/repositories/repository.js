class Repository {
    constructor(dbAdapter) {
        this.dbAdapter = dbAdapter
    }

    async all(select) {
        const response = this.dbAdapter.all(select)
        return response
    }

    async getById(itemId, select) {
        const response = this.dbAdapter.getById(itemId, select)
        return response
    }

    async create(item) {
        const response = this.dbAdapter.create(item)
        return response
    }

    async update(id, data) {
        const response = this.dbAdapter.update(id, data)
        return response
    }

    async remove(item) {
        const response = this.dbAdapter.remove(item)
        return response
    }
}

module.exports = Repository
