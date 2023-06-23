/**
 * Module dependencies.
 */
const boom = require('@hapi/boom');

/**
 * Class for simple CRUD operations.
 */
class CrudService {
  /**
   * Create method for CRUD operations.
   * @param {mongoose.model} model DB model like user or product DB schema.
   * @param {object} data Data from body after Joi validation.
   */
  async create(model, data) {
    const newData = await model.create({ ...data });
    return newData;
  }

  /**
   * Find all method for CRUD operations.
   * @param {mongoose.model} model DB model like user or product DB schema.
   */
  async find(model) {
    const data = await model.find();
    return data;
  }

  /**
   * Find by ID for CRUD operations.
   * @param {object} data Data from body after Joi validation.
   * @param {string} id UUID BSON string.
   */
  async findById(model, id) {
    const data = await model.findById(id);
    if (!data) {
      throw boom.notFound('Not found!');
    }
    return data;
  }

  /**
   * Update data by ID for CRUD operations.
   * @param {mongoose.model} model DB model like user or product DB schema.
   * @param {object} data Data from body after Joi validation.
   * @param {string} id UUID BSON string.
   */
  async update(model, id, changes) {
    await model.findByIdAndUpdate(id, changes);
    const data = await model.findById(id);
    return data;
  }

  /**
   * Delete document by ID for CRUD operations.
   * @param {mongoose.model} model DB model like user or product DB schema.
   * @param {string} id UUID BSON string.
   */
  async delete(model, id) {
    await model.findByIdAndDelete(id);
    return { id };
  }
}

module.exports = { CrudService };
