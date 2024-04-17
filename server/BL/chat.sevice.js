const chatController = require('../DL/controllers/chat.controller')
const userController = require('../DL/controllers/user.contoroller')
const { Flags } = require('../utility')

let funcs = {
    inbox: [Flags.Inbox],
    notread: [Flags.NotRead],
    sent: [Flags.Sent],
    favorite: [Flags.Favorite],
    deleted: [Flags.Deleted],
    draft: [Flags.Draft],
}

async function getNumNotRead(userId) {
    let chatsNotread = await userController.readOne({ _id: userId })
    let arrIsRecivedAndNotRead = chatsNotread.chats.filter(chat => chat.isRecieved && !chat.notread);

    return {
        numOfNewChats: arrIsRecivedAndNotRead.length
    }
}

async function getChats(userId, flag) {
    if (!funcs[flag]) throw ""
    let { chats } = await userController.readByFlags(userId, funcs[flag], { chats: true, users: true });
    return chats
}
async function getChatById(userId, emailId) {
    let chat = await chatController.readOne({ _id: emailId });
    console.log(chat);
    return chat
}

//create new email
async function createNewEmail(emailData) {
    const newEmail = {
        subject: emailData.subject,
        msg: {
            from: emailData.from,
            content: emailData.content
        },
        members: emailData.members
    }
    // let email = await chatController.create(newEmail);

    // let toUser = await userController.readOne({ email: emailData.msg.to });
    // toUser.emails.push(email._id);
    // toUser.emails[langth - 1].isRecieved = true;

    // toUser.save();

    // update sender user
    // let fromUser = await userController.readOne({ email: emailData.msg.from });
    // fromUser.emails.push(email._id);
    // fromUser.emails[langth - 1].isSent = true;
    // fromUser.save();

    // return email.save();
}


//Add new message
async function addNewMessageToEmail(emailId) {
    let email = await chatController.readOne({ _id: emailId })
    return await email.save()

}

module.exports = {
    getChats,
    addNewMessageToEmail,
    createNewEmail,
    getNumNotRead,
    getChatById
}