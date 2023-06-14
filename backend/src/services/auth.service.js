/**
 * Module dependencies.
 */
const UserService = require('./user.service');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { config } = require('../config/envConfig');

/**
 * Auth class service.
 */
const service = new UserService();
class AuthService {
  async getUser(email, password) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw boom.unauthorized();
    }
    return user;
  }
  signToken(user) {
    const payload = {
      sub: user.id,
      role: user.role,
    };
    const token = jwt.sign(payload, config.jwtKey);
    const userData = {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
    }
    return {
      user: userData,
      token,
    };
  }
}

module.exports = AuthService;
