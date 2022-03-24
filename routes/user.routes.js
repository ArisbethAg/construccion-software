const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth.js');

const userController = require('../controllers/user_controller');

router.get('/signup', userController.signup);
router.post('/signup', userController.signup_post);
router.get('/login', userController.login);
router.post('/login', userController.login_post);
router.use('/logout', userController.logout);
//router.post('/');
module.exports = router;