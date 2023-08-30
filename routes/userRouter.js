var express = require('express');
var router = express.Router();

let controller = require('../controllers/userController')
/* GET users listing. */
router.get('/', controller.getAllUsers);
router.get('/users/:id', controller.getUserById);
router.post('/users', controller.addUser);
router.delete('/users/:id', controller.deleteUser);

module.exports = router;
