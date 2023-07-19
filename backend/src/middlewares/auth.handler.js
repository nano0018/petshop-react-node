/**
 * Module dependencies.
 */
const boom = require('@hapi/boom');
const { config } = require('../config/envConfig');
const OrderedProductsService = require('../services/order.service');
const service = new OrderedProductsService();

/**
 * API Key validation.
 */
const checkAPIKey = (req, res, next) => {
  const APIKey = req.headers['x-api-key'];
  if (APIKey === config.apiKey) {
    next();
  } else {
    const error = boom.unauthorized();
    next(error);
  }
};

/**
 * Authorized roles validation.
 */
const checkAuthorizedRoles = (...roles) => {
  return (req, res, next) => {
    const user = req.user;
    if (roles.includes(user.role)) {
      next();
    } else {
      const error = boom.unauthorized();
      next(error);
    }
  };
};

/**
 * User id validation for orders.
 */
const checkOrderUserId = () => {
  return async (req, res, next) => {
    const user = req.user;
    let userId;
    const orderId = req.params.id;
    try {
      userId = await service.getUserId(orderId);
    } catch (error) {
      next(error);
    }
    if (String(userId) === user.sub) {
      next();
    } else {
      next(boom.unauthorized());
    }
  };
};

/**
 * User id validation.
 */
const checkId = () => {
  return async (req, res, next) => {
    const userId = req.params.id;
    const user = req.user;
    if (String(userId) === user.sub) {
      next();
    } else {
      next(boom.unauthorized());
    }
  };
};
module.exports = {
  checkAPIKey,
  checkAuthorizedRoles,
  checkOrderUserId,
  checkId,
};
