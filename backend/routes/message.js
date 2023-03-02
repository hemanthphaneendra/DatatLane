const express = require('express')
const { getAllMessages,
    createMessage,
    } = require('../controllers/messageController');

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

// routes
router.get('/',getAllMessages);

router.post('/',createMessage);

module.exports = router;