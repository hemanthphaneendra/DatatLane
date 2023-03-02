const express = require('express');

const router = express.Router()

const { 
    loginUser, 
    signupUser,
    emailSend,
    changePassword,
 } = require('../controllers/userController');

// login route
router.post('/login',loginUser)

// signup route
router.post('/signup', signupUser)

router.post('/email-send', emailSend)

router.post('/change-password', changePassword)

module.exports = router