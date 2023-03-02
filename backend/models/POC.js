const mongoose = require('mongoose')

const pocSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    completedBy: {
        type: String,
        required: true,
    }
}, {timestamps: true})

module.exports = mongoose.model('poc',pocSchema)