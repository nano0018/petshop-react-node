/**
 * Module dependencies.
 */
const Joi = require('joi');

/**
 * Joi validation types for product schema.
 */
const id = Joi.string().regex(/^[a-zA-Z0-9 ]*$/);
const name = Joi.string().min(3).max(15);
const category = Joi.string().regex(/^[a-zA-Z0-9 ]*$/);
const stock = Joi.number().min(1);
const price = Joi.number().min(1);
const description = Joi.string().min(3).max(125);
const img = Joi.string().min(3).max(255);

/**
 * Joi validation for product creation.
 */
const createProductSchema = Joi.object({
  name: name.required(),
  category: category.required(),
  stock: stock.required(),
  price: price.required(),
  description: description.required(),
  img: img.required(),
});


/**
 * Joi validation for update product data.
 */
const updateProductSchema = Joi.object({
  name: name,
  category: category,
  img: img,
  stock: stock,
  price: price,
  description: description,
});

/**
 * Joi validation for getting product data.
 */
const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, getProductSchema, updateProductSchema };
