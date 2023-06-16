/**
 * Log errors.
 */
function logErrors(err, req, res, next) {
  console.error(err);
  next(err);
}

/**
 * Error handler.
 */
function errorHandler(err, req, res, next) {
  typeof next;
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

/**
 * Boom error handler.
 */
function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}

module.exports = { logErrors, errorHandler, boomErrorHandler };
