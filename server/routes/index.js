/* INIT ROUTES FROM HERE */
const express = require('express');
const users = require('./user.route');

module.exports = () => {
  const router = express.Router();
  // get an instance of the express Router

  // middleware to use for all requests
  router.use((req, res, next) => {
    // do logging
    next(); // make sure we go to the next routes and don't stop here
  });

  /* Include Module Level Routes */
  users(router);

  return router;
};
