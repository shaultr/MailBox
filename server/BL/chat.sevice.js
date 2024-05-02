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
    return chat
}

//create new email
// async function createNewEmail(emailData) {
//     let email = await chatController.create(emailData);
//     emailData.members.forEach(async element => {
//         await userController.update({ _id: element, $push: { chats: email }  })
//         return email
//     });

// } 

async function createNewEmail(emailData) {
        let email = await chatController.create(emailData);
        await Promise.all(emailData.members.map(async element => {
            await userController.update({ _id: element }, { $push: { chats: email } });
        }));
        return email;

}


module.exports = {
    getChats,
    createNewEmail,
    getNumNotRead,
    getChatById
}