/**
 * Module dependencies.
 */
const express = require('express');
const router = express.Router();
const model = require('../db/model/order.model');
const OrderedProductsService = require('../services/order.service');
const { validatorHandler } = require('../middlewares/schema-validator.handler');
const { createOrderedProductsSchema } = require('../schemas/order.schemas');
const passport = require('passport');
const {
  checkAuthorizedRoles,
  checkOrderUserId,
} = require('../middlewares/auth.handler');
const { ROLES } = require('../utils/auth/permissions-roles.utils');
const service = new OrderedProductsService();

router.post(
  '/',
  validatorHandler(createOrderedProductsSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newOrder = await service.create(body);
      res.status(201).json(newOrder);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/manage',
  passport.authenticate('jwt', { session: false }),
  checkAuthorizedRoles(...ROLES.employees),
  async (req, res, next) => {
    try {
      const orders = await service.find(model);
      res.json(orders);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkAuthorizedRoles(...ROLES.registeredUser),
  checkOrderUserId(),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const order = await service.findById(id);
      res.json(order);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/manage/:id',
  passport.authenticate('jwt', { session: false }),
  checkAuthorizedRoles(...ROLES.employees),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const order = await service.findById(id);
      res.json(order);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
