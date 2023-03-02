const poc = require('../models/POC')

// Get All POCs
const getAllPOCs = async (req, res) => {
    const pocs = await poc.find({}).sort({createdAt: -1});

    res.status(200).json(pocs)
}

module.exports = { getAllPOCs }