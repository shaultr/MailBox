const mongoose = require('mongoose')
require('./chat.model')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        select: false
    },
    avatar: String,

    chats: [{
        chat: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'chat'
        },
        isSent: {type:Boolean,default:false},
        isRecieved: {type:Boolean,default:false},
        isFavorite: {type:Boolean,default:false},
        isDeleted: {type:Boolean,default:false},
        isRead: {type:Boolean,default:false},
    }],

    isActive : {
    type: Boolean,
    default: true
}
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel