/**
 * Module dependencies.
 */
const mongoose = require('mongoose');
const { config } = require('../config/envConfig');

/**
 * Database URI from env
 */
const DB_URL = `${config.dbURL}/${config.dbName}`;

/**
 * Database connection
 */
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`db connected: ${config.dbName}`))
  .catch((error) => console.log(error));

module.exports = mongoose;
