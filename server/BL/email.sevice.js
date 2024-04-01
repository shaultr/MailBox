const emailController = require('../DL/controllers/email.controller')
const messageController = require('../DL/controllers/message.controller')
const userController = require('../DL/controllers/user.contoroller')

//create new email
async function createNewEmail(emailData) {
    let msgDB = await messageController.create(emailData.msg);
    const newEmail = { subject: emailData.subject, msg: msgDB[0]._id, lastDate: emailData.lastDate }
    let email = await emailController.create(newEmail)
    // update recipient user
    let toUser = await userController.readOne({ email: emailData.msg[0].to[0] }, false);
    console.log(msgDB[0]);
    // toUser.emails.push(email._id);
    // user.save();
    
    // update sender user
    // let fromUser = await userController.readOne({ email: emailData.from });
    // fromUser.emails.push(email._id);
    // user.save();

    return email.save();
}


//Add new message
async function addNewMessageToEmail(emailId, msg) {
    let msgDB = await messageController.create(msg);
    let email = await emailController.readOne({ _id: emailId })
    email.msg.push(msgDB._id)
    return await email.save()

}

module.exports = {
    addNewMessageToEmail,
    createNewEmail
}