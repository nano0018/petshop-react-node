const express = require('express');
const authRouter = require('./auth.routes');
const userRouter = require('./user.routes');
const categoryRouter = require('./category.routes');
const productRouter = require('./product.routes');
const orderRouter = require('./order.routes');

function routerAPI(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/auth', authRouter);
  router.use('/users', userRouter);
  router.use('/categories', categoryRouter);
  router.use('/products', productRouter);
  router.use('/orders', orderRouter);
}

module.exports = routerAPI;
