/**
 * Module dependencies.
 */
const boom = require('@hapi/boom');

class CrudRepository {
  async find(model) {
    const data = await model.find();
    return data;
  }

  async findByField(model, field) {
    const data = await model.findOne({ field });
    if (!data) {
      throw boom.notFound('Not found!');
    }
    return data;
  }

  async update(model, id, changes) {
    const data = await model.findById(id);
    const updates = await model.findByIdAndUpdate(id, { ...data, ...changes });
    return updates;
  }

  async delete(model, id) {
    await model.findByIdAndDelete(id);
    return { id };
  }
}

module.exports = { CrudRepository };
