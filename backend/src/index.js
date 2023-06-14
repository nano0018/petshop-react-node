/*
 * backend-petshop
 * Copyright(c) 2023 Daniel Cifuentes <dacifuentes@outlook.com>
 * MIT Licensed
 */

/**
 * Module dependencies
 */
const express = require('express');
const cors = require('cors');
const routerAPI = require('./routes/index.routes');
const app = express();
const PORT = process.env.PORT || 3000;
const FRONTEND_URL = process.env.FRONTEND_URL || `http://localhost:${PORT}`;

/**
 * Parsing JSON
 */
app.use(express.json());

/**
 * CORS Configurations
 */
const whiteListCORS = ['http://localhost:8080', FRONTEND_URL];
const options = {
  origin: (origin, callback) => {
    if (whiteListCORS.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed'));
    }
  },
};
app.use(cors(options));

/**
 * Passport middleware
 */
require('./utils/auth/auth.util');

/**
 * Test endpoint
 */
app.get('/api', (req, res) => {
  res.send('Prueba express');
});

routerAPI(app);

/**
 * App start
 */
require('./db/config');
app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
