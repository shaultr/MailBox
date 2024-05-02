const userController = require('../DL/controllers/user.contoroller');
require("dotenv").config();
const jwt = require("jsonwebtoken");
const TOKEN_SECRET = process.env.TOKEN_SECRET;
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
async function getUser(req) {
    console.log('correct.userId')
    const token = req.headers.authorization;
    const correct = jwt.verify(token, TOKEN_SECRET);
    const user = await userController.readOne(correct.userId); 
    return user;
}


module.exports = {
    login,
    register,
    getUser
}