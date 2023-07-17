/**
 * Module dependencies.
 */
const express = require('express');
const passport = require('passport');
const router = express.Router();
const AuthService = require('../services/auth.service');
const service = new AuthService();

/**
 * Login router
 */
router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  (req, res, next) => {
    try {
      const user = req.user;
      res.json(service.signToken(user));
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Validate token router
 */
router.get(
  '/validate',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.status(200).json('Authorized');
  }
);

/**
 * Recovery router
 */
router.post('/recovery', async (req, res, next) => {
  try {
    const { email } = req.body;
    const recovery = await service.sendResetPassword(email);
    res.json(recovery);
  } catch (error) {
    next(error);
  }
});

/**
 * Change router
 */
router.post('/change-password', async (req, res, next) => {
  try {
    const { token, newPassword } = req.body;
    const recovery = await service.changePassword(token, newPassword);
    res.json(recovery);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
