const JobPosting = require('../models/jobPostings');

// Get All Jobs
const getAllJobPostings = async (req, res) => {
    const jobPostings = await JobPosting.find({}).sort({createdAt: -1});

    res.status(200).json(jobPostings);
}

// Create a new Job
const createJobPosting = async (req, res) => {
    const { title, price, description, level, skills } = req.body;

    try {
        const jobPosting = await JobPosting.create({ title, price, description, level, skills })

        res.status(200).json(jobPosting)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports = {
    getAllJobPostings,
    createJobPosting,
}