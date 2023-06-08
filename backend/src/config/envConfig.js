/**
 * Module dependencies.
 */
require('dotenv').config({ path: '../.env' });

/**
 * .env var list
 */
const config = {
  dbURL: process.env.MONGODB_URL,
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV === 'production',
  dbName: process.env.MONGO_DB,
  dbUser: process.env.MONGO_INITDB_ROOT_USERNAME,
  dbPassword: process.env.MONGO_INITDB_ROOT_PASSWORD,
  apiKey: process.env.API_KEY,
  jwtKey: process.env.JWT_KEY,
  jwtRecoveryKey: process.env.JWT_RECOVERY_KEY,
  recoveryServiceEmail: process.env.BACKEND_MAIL,
  recoveryServicePassword: process.env.MAIL_PASSWORD,
};

module.exports = { config }
