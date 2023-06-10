const express = require('express');
const router = express.Router();
const UserService = require('../services/user.service');
const service = new UserService();
const model = require('../db/model/user.model');
const { validatorHandler } = require('../middlewares/schema-validator.handler');
const {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
} = require('../schemas/user.schemas');

router.get('/', async (req, res, next) => {
  try {
    const users = await service.find(model);
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
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

router.patch(
  '/:id',
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

router.put(
  '/:id',
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
