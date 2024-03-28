const emailController = require('../DL/controllers/email.controller')
const messageController = require('../DL/controllers/message.controller')

//create new email
async function createNewEmail(subject) {
    let email = await emailController.create()
    email.msg.push(msgDB._id)
    return await email.save()

}

//Add new message to email
async function addNewMessageToEmail(emailId, msg) {
    let msgDB = await messageController.create(msg)
    let email = await emailController.readOne({ _id: emailId })
    email.msg.push(msgDB._id)
    return await email.save()

}
module.exports = {
    addNewMessageToEmail,
    createNewEmail
}