var express = require('express');
var router = express.Router();

let controller = require('../controllers/userController')
/* GET users listing. */
router.get('/', controller.getAllUsers);

module.exports = router;
