
class ObjectionOrmAdapter {
  constructor(model){
    this.model = model
  }

  async all() {
    const response = this.model.query()
    return response
  }

  async getById(itemId) {
    const response = await this.model.query().findById(itemId)
    return response
  }

  async create(item) {
    const response = await this.model.query().insert(item)
    return response
  }

  async update(item) {
    const response = await this.model.query()
      .findById(item.id)
      .patch(item);
    return response
  }

  async remove(itemId) {
    const response = await this.model.query().deleteById(itemId)
    return response
  }
}

module.exports = ObjectionOrmAdapter