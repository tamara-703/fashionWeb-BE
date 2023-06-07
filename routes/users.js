const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')

// router: /user
router.post('/', userController.create)

// router: /user/login
router.post('/login', userController.login)

module.exports = router;
