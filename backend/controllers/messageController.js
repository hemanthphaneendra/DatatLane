const Message = require('../models/message');

// Get All Messages
const getAllMessages = async (req, res) => {

    const messages = await Message.find({});

    res.status(200).json(messages);
}

// Create a new message
const createMessage = async (req, res) => {
    const { user, message } = req.body;

    console.log(user)

    // const email = user['email']

    try{
        const newMessage = await Message.create({user:user, message})
        res.status(200).json(newMessage)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getAllMessages,
    createMessage,
}