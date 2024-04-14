const userController = require('../DL/controllers/user.contoroller');
const { createToken } = require('../middelewares/auth')
const bcrypt = require('bcrypt');


async function login(data) {
    const user = await userController.readOne({ email: data.email }, '+password');
    if (!user) throw { msg: 'User not found' };
    const correctPassword = bcrypt.compareSync(data.password, user.password);
    if (!correctPassword) throw { msg: 'bad password' };
    const token = createToken(user);
    user.password = null;
    return { user, token };
}

async function register(data) {
    const user = await userController.readOne({ email: data.email });
    if (user) throw { msg: 'User already registered' };
    const hash = bcrypt.hashSync(data.password, 10)
    await userController.create({ ...data, password: hash });
    return true;
}

//get inbox emails
async function getUser(req, res) {
    // const user = await userController.readOne();

}


module.exports = {
    login,
    register,
    getUser
}