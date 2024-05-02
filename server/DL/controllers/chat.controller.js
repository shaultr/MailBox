const chatModel = require('../models/chat.model')


async function create(data) {
    return await chatModel.create(data)
}
async function read(filter,isPopulate) {
    return await chatModel.find(filter)
}
async function readOne(filter) {
    return await chatModel.findOne(filter).populate({path: 'msg.from', select: 'fullName avatar' })
}
async function update(id, data) {

    return await chatModel.findByIdAndUpdate(id, data, { new: true })
}
async function del(id) {
    return await update(id, { isActive: false }) 
}

module.exports = { create, read, readOne, update, del }