const emailController = require('../DL/controllers/email.controller')
const messageController = require('../DL/controllers/message.controller')
const userController = require('../DL/controllers/user.contoroller')

//create new email
async function createNewEmail(emailData) {
    
    //create new msg
    let msgDB = await messageController.create(emailData.msg);

    const newEmail = { subject: emailData.subject, msg: msgDB._id }
    let email = await emailController.create(newEmail);

    // update recipient user
    let toUser = await userController.readOne({ email: emailData.msg.to });
    toUser.emails.push(email._id);
    toUser.emails[langth-1].isRecieved = true;

    toUser.save();
    
    // update sender user
    let fromUser = await userController.readOne({ email: emailData.msg.from });
    fromUser.emails.push(email._id);
    fromUser.emails[langth-1].isSent = true;
    fromUser.save();
    
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