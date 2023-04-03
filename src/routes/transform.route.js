const express = require('express');
const transformRouter = express.Router();

const transformController = require('../controllers/transform.controller');

transformRouter.route('/').post((req, res, next) => {
  const { payload, referenceData } = req.body;
  try {
    // call the transform controller and send response
    res.send(transformController(payload, referenceData));
  } catch (err) {
    next(err);
  }
});

module.exports = transformRouter;
