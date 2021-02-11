/* LIST OUT ROUTES SPECIFIC TO MODULES (USER MODULE HERE ...) */
const userController = require('../controllers/user.controller');
module.exports = router => {
  router.get('/users', userController.getUsers);
  router.get('/users/:uid', userController.getUsersDetails);
  return router;
};
