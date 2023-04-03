const express = require('express');
const app = express();
app.use(express.json());

// setup middlewares
const requestLogger = require('./middlewares/requestLogger.middleware');
app.use(requestLogger);

// setup routes
const transformRouter = require('./routes/transform.route');
app.use('/transform', transformRouter);

// custom error handler
app.use('/', (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  console.error(err.message);
  res.status(500).send('Something went wrong');
});

module.exports = app;
