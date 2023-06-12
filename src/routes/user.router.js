const express = require('express');
const validateUser = require('../middlewares/validateUser');
const { userController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.get('/', validateToken, userController.getUsers);
router.get('/:id', validateToken, userController.getUserById);
router.post('/', validateUser, userController.userRegister);

module.exports = router;