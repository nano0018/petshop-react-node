/**
 * Module dependencies.
 */
const boom = require('@hapi/boom');

/**
 * Object for simple CRUD operations.
 */
class CrudService {
  async create(model, data) {
    const newData = await model.create({ ...data });
    return newData;
  }
  async find(model) {
    const data = await model.find();
    return data;
  }

  async findById(model, id) {
    const data = await model.findById(id);
    if (!data) {
      throw boom.notFound('Not found!');
    }
    return data;
  }

  async update(model, id, changes) {
    await model.findByIdAndUpdate(id, changes);
    const data = await model.findById(id);
    return data;
  }

  async delete(model, id) {
    await model.findByIdAndDelete(id);
    return { id };
  }
}

module.exports = { CrudService };
