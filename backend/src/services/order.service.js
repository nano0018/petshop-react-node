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
  /**
   * Create method for Order schema.
   * @param {*} data Data from body after Joi validation.
   * @returns New registered order.
   */
  async create(data) {
    const productList = data.orderedProducts;
    for (let index = 0; index < productList.length; index++) {
      const product = productList[index];
      const productId = product.productId;
      const dbProduct = await productModel.findOne({ _id: productId });
      if (!dbProduct) {
        throw boom.notFound('Product not found');
      }
      if (dbProduct.stock < product.qtyOrderedProduct) {
        throw boom.badRequest('Insufficient stock');
      }
    }
    const newOrder = await model.create(data);
    return newOrder;
  }
  /**
   * Find order by id method for Order schema.
   * @param {*} id Registered order id.
   * @returns A registered order.
   */
  async findById(id) {
    const order = await model.findById(id);
    if (!order) {
      throw boom.notFound('Order not found');
    }
    const populatedOrderedProducts = await Promise.all(
      order.orderedProducts.map(async (product) => {
        const productId = product.productId;
        const dbProduct = await productModel.findOne({ _id: productId });
        if (!dbProduct) {
          throw boom.notFound('Some ordered products not found');
        }
        if (dbProduct.stock < product.qtyOrderedProduct) {
          throw boom.badRequest('Insufficient stock');
        }
        return {
          ...dbProduct._doc,
          qtyOrderedProduct: product.qtyOrderedProduct,
        };
      })
    );
    return {
      ...order._doc,
      orderedProducts: populatedOrderedProducts,
    };
  }

  /**
   * Get user id by id order method for Order schema.
   * @param {*} id Registered order id.
   * @returns A registered order.
   */
  async getUserId(id) {
    const order = await model.findById(id);
    if (!order) {
      throw boom.notFound('Order not found');
    }
    const userId = order.userId;
    return userId;
  }

   /**
   * Get user orders by user id method for Order schema.
   * @param {*} id Registered user id.
   * @returns {Array} Array of user orders.
   */
   async getOrderByUserId(id) {
    const orders = await model.find({userId: id});
    if (!orders) {
      throw boom.notFound('Orders not found');
    }
    return orders;
  }

  async updateOrder(id, changes) {
    const order = await model.findById(id);
    if (!order) {
      throw boom.notFound('Order not found');
    }

    const orderedProducts = changes.orderedProducts;

    for (let index = 0; index < orderedProducts.length; index++) {
      const product = orderedProducts[index];
      const productId = product.productId;
      const dbProduct = await productModel.findOne({ _id: productId });
      if (!dbProduct) {
        throw boom.notFound('Product not found');
      }
      if (dbProduct.stock < product.qtyOrderedProduct) {
        throw boom.badRequest('Insufficient stock');
      }
    }

    const updatedOrder = await model.findByIdAndUpdate(id, {
      ...order._doc.orderedProducts,
      ...changes,
    });
    return updatedOrder;
  }
}

module.exports = OrderedProductsService;
