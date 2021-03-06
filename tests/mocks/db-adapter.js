class PgAdapterSpy {
    async all() {
        return [
            { id: 1 },
            { id: 2 },
            { id: 3 }
        ]
    }

    async getById(id) {
        if (id == 1)
            return { id: 1 }
        return false
    }

    async create(data) {
        data.id = 1
        return data
    }

    async update(data) {
        return true
    }

    async remove(data) {
        return 1
    }
}

module.exports = {
    PgAdapterSpy
}