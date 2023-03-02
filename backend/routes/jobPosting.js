const express = require('express');

const { 
    getAllJobPostings,
    createJobPosting,
} = require('../controllers/jobpostingController');

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

// routes
router.get('/', getAllJobPostings);

router.post('/', createJobPosting);

module.exports = router;