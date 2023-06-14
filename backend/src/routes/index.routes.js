const express = require('express');
const userRouter = require('./user.routes');
const authRouter = require('./auth.routes');

function routerAPI(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', userRouter);
  router.use('/auth', authRouter);
}

module.exports = routerAPI;
