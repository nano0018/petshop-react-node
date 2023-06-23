/**
 * Module dependencies.
 */
const { CrudService } = require('./crud.service');
const boom = require('@hapi/boom');
const model = require('../db/model/category.model');
const productModel = require('../db/model/product.model');

/**
 * Category CRUD service.
 */

class CategoryService extends CrudService {
  /**
   * Category FindById service. Mongoose populate not working,
   *  so the method uses a manual query to retrieve the product array that
   *  contains the category id.
   * @param {*} id Registered category id
   */
  async findById(id) {
    const data = await model.findById(id);
    if (!data) {
      throw boom.notFound('Not found!');
    }
    const products = await productModel.find({ category: data._id });
    return {
      ...data._doc,
      products: products,
    };
  }
}

module.exports = CategoryService;
