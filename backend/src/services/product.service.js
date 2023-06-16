/**
 * Module dependencies.
 */
const { CrudService } = require('./crud.service');
const model = require('../db/model/product.model');

/**
 * Product CRUD service.
 */

class ProductService extends CrudService {
  async find() {
    const data = await model.find();
    return data;
  }
}

module.exports = ProductService;
