const express = require('express');

const { getAllPOCs } = require('../controllers/POCController');

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

// routes
router.get('/', getAllPOCs)

module.exports = router;