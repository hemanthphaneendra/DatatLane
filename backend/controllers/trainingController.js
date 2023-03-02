const Training = require('../models/trainingModel');

const getTrainingProfiles = async (req, res) => {
    const traningProfiles = await Training.find({}).sort({createdAt: -1})

    res.status(200).json(traningProfiles);
}

const createTrainingProfile = async (req,res) => {
    const { name, city, role, skills } = req.body;

    try {
        const trainingProfile = await Training.create({name, city, role, skills });

        res.status(200).json(trainingProfile);
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getTrainingProfiles,
    createTrainingProfile,
}