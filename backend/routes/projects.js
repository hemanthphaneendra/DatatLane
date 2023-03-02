const express = require('express')
const { getAllProjects } = require('../controllers/projectsController');

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

router.get('/', getAllProjects)

module.exports = router;