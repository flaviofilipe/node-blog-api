
class ObjectionOrmAdapter {
  constructor(model) {
    this.model = model
  }

  /**
   * @param string select 
   * @param string join 
   * @param array filter [table.column, operator, data]
   * @returns 
   */
  async all(select, join, filter) {
    const response = this.model.query()

    if (select) {
      response.select(select)
    }

    if(join){
      response.joinRelated(join)
    }

    if(filter){
      response.where(filter[0], filter[1], filter[2])
    }

    return await response
  }

  async getById(itemId, select, join) {
    const response = this.model.query().findById(itemId)

    if (select) {
      response.select(select)
    }
    
    if(join){
      response.joinRelated(join)
    }

    return await response
  }

  async create(item) {
    const response = await this.model.query().insert(item)
    return response
  }

  async update(id, data) {
    const response = await this.model.query()
      .findById(id)
      .patch(data);
    
    return response
  }

  async remove(itemId) {
    const response = await this.model.query().deleteById(itemId)
    return response
  }

  async findUserByEmail(email) {
    const response = await this.model.query()
      .where('email', email)
      .limit(1)
    return response
  }
}

module.exports = ObjectionOrmAdapter