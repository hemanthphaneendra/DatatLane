const SupportWorkUser = require('../models/supportWorkUserModel')
const mongoose = require('mongoose')

const getSupportWorkUsers = async (req, res) => {

    const supportWorkUsers = await SupportWorkUser.find({}).sort({createdAt: -1})

    res.status(200).json(supportWorkUsers)
}

const createSupportWorkUser = async (req, res) => {
    const { name, expertise, charges, description } = req.body;

    try {
        const supportWorkUser = await SupportWorkUser.create({ name, expertise, charges, description })

        res.status(200).json(supportWorkUser);
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getSupportWorkUsers,
    createSupportWorkUser,
}