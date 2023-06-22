/**
 * Module dependencies.
 */
const express = require('express');
const router = express.Router();
const model = require('../db/model/category.model');
const CategoryService = require('../services/category.service');
const passport = require('passport');
const { checkAuthorizedRoles } = require('../middlewares/auth.handler');
const { ROLES } = require('../utils/auth/permissions-roles.utils');
const { validatorHandler } = require('../middlewares/schema-validator.handler');
const {
  getCategorySchema,
  createCategorySchema,
  updateCategorySchema,
} = require('../schemas/category.schemas');
const service = new CategoryService();

/**
 * Get all categories.
 */
router.get('/', async (req, res, next) => {
  try {
    const categories = await service.find(model);
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

/**
 * Get category by id.
 */
router.get(
  '/:id',
  validatorHandler(getCategorySchema, 'params'),

  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.findById(id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Create category.
 */
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkAuthorizedRoles(...ROLES.employees),
  validatorHandler(createCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await service.create(model, body);
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Update category info by id.
 */
router.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkAuthorizedRoles(...ROLES.employees),
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const { id } = req.params;
      const category = await service.update(model, id, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Update category info by id.
 */
router.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkAuthorizedRoles(...ROLES.employees),
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const { id } = req.params;
      const category = await service.update(model, id, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
