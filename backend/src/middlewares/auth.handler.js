/**
 * Module dependencies.
 */
const boom = require('@hapi/boom');
const { config } = require('../config/envConfig');


/**
 * API Key validation.
 */
const checkAPIKey = (req, res, next) => {
  const APIKey = req.headers['x-api-key'];
  if (APIKey === config.apiKey) {
    next();
  } else {
    next(boom.unauthorized());
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
      next(boom.unauthorized());
    }
  };
};

module.exports = { checkAPIKey, checkAuthorizedRoles };
