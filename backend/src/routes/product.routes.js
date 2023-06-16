/**
 * Module dependencies.
 */
const express = require('express');
const router = express.Router();
const model = require('../db/model/product.model');
const ProductService = require('../services/product.service');
const passport = require('passport');
const { checkAuthorizedRoles } = require('../middlewares/auth.handler');
const { ROLES } = require('../utils/auth/permissions-roles.utils');
const { validatorHandler } = require('../middlewares/schema-validator.handler');
const { getProductSchema, createProductSchema, updateProductSchema } = require('../schemas/product.schemas');
const service = new ProductService();

/**
 * Get all products.
 */
router.get('/', async (req, res, next) => {
  try {
    const products = await service.find(model);
    res.json(products);
  } catch (error) {
    next(error);
  }
});

/**
 * Get product by id.
 */
router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findById(model, id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Create product.
 */
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkAuthorizedRoles(...ROLES.employees),
  validatorHandler(createProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newproduct = await service.create(model, body);
      res.status(201).json(newproduct);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Update product info by id.
 */
router.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkAuthorizedRoles(...ROLES.employees),
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const { id } = req.params;
      const product = await service.update(model, id, body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Update product info by id.
 */
router.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkAuthorizedRoles(...ROLES.employees),
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const { id } = req.params;
      const product = await service.update(model, id, body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
