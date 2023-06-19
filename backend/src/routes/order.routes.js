/**
 * Module dependencies.
 */
const express = require('express');
// const passport = require('passport');
const router = express.Router();
const OrderedProductsService = require('../services/order.service');
const { validatorHandler } = require('../middlewares/schema-validator.handler');
const { createOrderedProductsSchema } = require('../schemas/order.schemas');
const service = new OrderedProductsService();

router.get('/', async (req, res, next) => {
  try {
    const order = await service.find();
    res.json(order);
  } catch (error) {
    next(error);
  }
});

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

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await service.findById(id);
    res.json(order);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
