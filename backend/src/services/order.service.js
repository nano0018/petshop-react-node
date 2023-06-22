/**
 * Module dependencies.
 */
const { CrudService } = require('./crud.service');
const boom = require('@hapi/boom');
const model = require('../db/model/order.model');
const productModel = require('../db/model/product.model');

/**
 * Order CRUD service.
 */

class OrderedProductsService extends CrudService {
  async create(data) {
    const productList = data.orderedProducts;
    productList.forEach(async (orderedProduct) => {
      const productId = orderedProduct.productId;
      const dbProduct = await productModel.findOne({ _id: productId });
      if (!dbProduct) {
        throw boom.notFound('Product not found');
      }
    });
    const newOrder = await model.create(data);
    return newOrder;
  }

  async findById(id) {
    const order = await model.findById(id);
    if (!order) {
      throw boom.notFound('Order not found');
    }
    const populatedOrderedProducts = await Promise.all(order.orderedProducts.map(
      async (product) => {
        const productId = product.productId;
        const dbProduct = await productModel.findOne({ _id: productId });
        return dbProduct;
      }
    ));
    return {
      ...order._doc,
      orderedProducts: populatedOrderedProducts
    };
  }

  async getUserId(id) {
    const order = await model.findById(id);
    if (!order) {
      throw boom.notFound('Order not found');
    }
    const userId = order.userId;
    return userId;
  }
}

module.exports = OrderedProductsService;
