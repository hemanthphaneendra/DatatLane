const express = require('express')
const { 
    getTrainingProfiles,
    createTrainingProfile 
} = require('../controllers/trainingController');

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

// routes
router.get('/', getTrainingProfiles);

router.post('/', createTrainingProfile);

module.exports = router;