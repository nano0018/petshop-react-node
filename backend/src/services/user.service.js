/**
 * Module dependencies.
 */
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { CrudService } = require('./crud.service');
const model = require('../db/model/user.model');

/**
 * User CRUD service.
 */
class UserService extends CrudService {

  /**
   * Create method for User schema. Includes bcrypt password hashing.
   * @param {object} data Data from body after Joi validation.
   */
  async create(data) {
    const { email } = data;
    const user = await model.findOne({ email });
    if (user) {
      throw boom.conflict('The email is already in use!');
    }
    const hash = await bcrypt.hash(data.password, 10);
    const newData = await model.create({ ...data, password: hash });

    // eslint-disable-next-line no-unused-vars
    const { password, ...resultUserObject } = newData._doc;
    return resultUserObject;
  }
  /**
   * Find by email method for User schema.
   * @param {string} email Registered user email.
   */
  async findByEmail(email) {
    const user = await model.findOne({ email: email }).select('+password');
    if (user === null) {
      throw boom.notFound('The email is not registered!');
    }
    return user;
  }
  /**
   * Find user by id method for User schema.
   * @param {string} id Registered user id.
   */
  async findByIdRecovery(id) {
    const data = await model.findById(id).select('+recoveryToken');
    if (!data) {
      throw boom.notFound('Not found!');
    }
    return data;
  }
}

module.exports = UserService;
