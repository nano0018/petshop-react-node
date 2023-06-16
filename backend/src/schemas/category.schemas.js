/**
 * Module dependencies.
 */
const Joi = require('joi');

/**
 * Joi validation types for category schema.
 */
const id = Joi.string().regex(/^[a-zA-Z0-9 ]*$/);
const name = Joi.string().min(3).max(15);
const img = Joi.string().min(3).max(255);

/**
 * Joi validation for category creation.
 */
const createCategorySchema = Joi.object({
  name: name.required(),
  img: img.required(),
});


/**
 * Joi validation for update category data.
 */
const updateCategorySchema = Joi.object({
  name: name,
  img: img,
});

/**
 * Joi validation for getting category data.
 */
const getCategorySchema = Joi.object({
  id: id.required(),
});

module.exports = { createCategorySchema, getCategorySchema, updateCategorySchema };
