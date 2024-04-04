const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    to: [{
        type: String,
        required: true
    }],
    from: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    content: String,

})

const chatSchema = new mongoose.Schema({
    subject: {
        type: String
    },

    msg: {
        type: [messageSchema],
        required: true
    }, 

    lastDate: {
        type: Date,
        default: Date.now
    },

})

const chatModel = mongoose.model('chat', chatSchema)

module.exports = chatModel