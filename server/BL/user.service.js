const userController = require('../DL/controllers/user.contoroller');


async function createUser(data) {
    return await userController.create(data);
}

//get inbox emails
async function getEmailsByFilter(filter, isPopulate) {

    return await userController.read(filter, isPopulate);
}










module.exports = {
    createUser,
    getEmailsByFilter
}