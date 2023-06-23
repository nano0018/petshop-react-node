/**
 * Module dependencies.
 */
const Joi = require('joi');

/**
 * Joi validation types for user schema.
 */
const id = Joi.string().regex(/^[a-zA-Z0-9 ]*$/);
const name = Joi.string().min(3).max(15);
const lastName = Joi.string().min(3).max(15);
const email = Joi.string().email();
const password = Joi.string()
  .min(8)
  .regex(/[a-zA-Z0-9]{3,30}/);
const role = Joi.string().min(4).max(10);

/**
 * Joi validation for user creation.
 */
const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  name: name.required(),
  lastName: lastName.required(),
  role: role.invalid('admin', 'employee'),
});

/**
 * Joi validation for employee creation.
 */
const createEmployeeSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  name: name.required(),
  lastName: lastName.required(),
  role: role.required(),
});

/**
 * Joi validation for update user data.
 */
const updateUserSchema = Joi.object({
  email: email,
  password: password,
  name: name,
  lastName: lastName,
  role: role.invalid('admin', 'employee'),
});

/**
 * Joi validation for update employee data.
 */
const updateEmployeeSchema = Joi.object({
  email: email,
  password: password,
  name: name,
  lastName: lastName,
  role: role,
});

/**
 * Joi validation for getting user data.
 */
const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
  createEmployeeSchema,
  updateEmployeeSchema,
};
