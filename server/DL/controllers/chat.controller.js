const emailModel = require('../models/chat.model')


async function create(data) {
    return await emailModel.create(data)
}
async function read(filter,isPopulate) {
    return await emailModel.find(filter)
}
async function readOne(filter) {
    return await emailModel.findOne(filter)
}
async function update(id, data) {

    return await emailModel.findByIdAndUpdate(id, data, { new: true })
}
async function del(id) {
    return await update(id, { isActive: false })
}

module.exports = { create, read, readOne, update, del }