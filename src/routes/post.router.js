const express = require('express');
const { postController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');
const validatePost = require('../middlewares/validatePost');

const router = express.Router();

router.post('/', validateToken, validatePost, postController.registryPost);

module.exports = router;