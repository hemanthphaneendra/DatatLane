const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const trainingSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    skills: {
        type: Array,
        required: true,
    }
}, { timestamps: true })

module.exports = mongoose.model('Training', trainingSchema) 