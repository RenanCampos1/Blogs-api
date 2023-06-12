const express = require('express');
const { categoriesController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');
const validateCategory = require('../middlewares/validateCategory');

const router = express.Router();

router.post('/', validateToken, validateCategory, categoriesController.registryCategory);
router.get('/', validateToken, categoriesController.getCategory);

module.exports = router;
