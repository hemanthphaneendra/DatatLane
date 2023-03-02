const express = require('express')
const { 
    getSupportWorkUsers, 
    createSupportWorkUser 
} = require('../controllers/supportWorkUserController');

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

// routes
router.get('/', getSupportWorkUsers)

router.post('/', createSupportWorkUser)


module.exports = router
