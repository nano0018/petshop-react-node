/**
 * Module dependencies.
 */
const express = require('express');
const router = express.Router();
const UserService = require('../services/user.service');
const model = require('../db/model/user.model');
const { validatorHandler } = require('../middlewares/schema-validator.handler');
const {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
  createEmployeeSchema,
} = require('../schemas/user.schemas');
const passport = require('passport');
const { checkAuthorizedRoles, checkId } = require('../middlewares/auth.handler');
const { ROLES } = require('../utils/auth/permissions-roles.utils');
const service = new UserService();

/**
 * Get all users.
 */
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkAuthorizedRoles(...ROLES.employees),
  async (req, res, next) => {
    try {
      const users = await service.find(model);
      res.json(users);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Get user by id.
 */
router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkAuthorizedRoles(...ROLES.registeredUser),
  checkId(),
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await service.findById(model, id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Create user.
 */
router.post(
  '/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await service.create(body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Create employees.
 */
router.post(
  '/employee',
  passport.authenticate('jwt', { session: false }),
  checkAuthorizedRoles(...ROLES.admin),
  validatorHandler(createEmployeeSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await service.create(body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
);


/**
 * Update user info by id.
 */
router.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkAuthorizedRoles(...ROLES.registeredUser),
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const { id } = req.params;
      const user = await service.update(model, id, body);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Update user info by id.
 */
router.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkAuthorizedRoles(...ROLES.registeredUser),
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const { id } = req.params;
      const user = await service.update(model, id, body);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
