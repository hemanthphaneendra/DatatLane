const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const supportWorkUserSchema = new Schema({
    name : {
        type: String,
        required: true,
    },
    expertise : {
        type: String,
        required: true,
    },
    description : {
        type: String,
        required: true,
    },
    charges : {
        type: Number,
        required: true,
    }
},{ timestamps: true })

module.exports = mongoose.model('SupportWorkUser', supportWorkUserSchema)