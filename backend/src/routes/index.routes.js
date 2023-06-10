const express = require('express');
const userRouter = require('./user.routes');

function routerAPI(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', userRouter);
}

module.exports = routerAPI;
