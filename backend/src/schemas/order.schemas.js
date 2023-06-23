/**
 * Module dependencies.
 */
const Joi = require('joi');

/**
 * Joi validation types for user schema.
 */
const id = Joi.string().regex(/^[a-zA-Z0-9 ]*$/);
const userId = Joi.string().regex(/^[a-zA-Z0-9 ]*$/);
const orderedProducts = Joi.array();

/**
 * Joi validation for user creation.
 */
const createOrderedProductsSchema = Joi.object({
  userId: userId.required(),
  orderedProducts: orderedProducts.required(),
});

/**
 * Joi validation for update user data.
 */
const updateOrderedProductsSchema = Joi.object({
  orderedProducts: orderedProducts.required(),
});

/**
 * Joi validation for getting user data.
 */
const getOrderedProductsSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createOrderedProductsSchema,
  updateOrderedProductsSchema,
  getOrderedProductsSchema,
};
