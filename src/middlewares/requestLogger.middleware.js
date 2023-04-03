/**
 * Middleware for logging incoming requests.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const requestLogger = (req, res, next) => {
  const method = req.method;
  const url = req.originalUrl;

  console.log(`${method} ${url}`);
  next();
};

module.exports = requestLogger;
