const mongoose = require('mongoose');

const jobPostingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true,
    },
    skills: {
        type: Array,
        required: true,
    }
}, {timestamps: true})

module.exports = mongoose.model('JobPosting',jobPostingSchema);