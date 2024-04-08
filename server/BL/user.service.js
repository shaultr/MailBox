const userController = require('../DL/controllers/user.contoroller');


async function createUser(data) {
    return await userController.create(data);
}

//get inbox emails
async function getInboxChat(req, isPopulate) {
    const user = await userController.readOne({_id: req.body.user._id})
    console.log(user);

    const filter = {
        _id: req.body.user._id,
        chats: {
            $elemMatch: {
                isRecieved: true
            }
        }
    }
    return await userController.read(filter, isPopulate);
}










module.exports = {
    createUser,
    getInboxChat
}