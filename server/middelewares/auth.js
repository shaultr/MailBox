require("dotenv").config();
const jwt = require("jsonwebtoken");
const userController = require('../DL/controllers/user.contoroller');

const TOKEN_SECRET = process.env.TOKEN_SECRET;
function createToken(user) {
    const token = jwt.sign({ userId: user._id, email: user.email }, TOKEN_SECRET, { expiresIn: '1h' });
    // console.log(token);
    return token
}
async function auth(req, res, next) {
    try {
        const token = req.headers.authorization;
        if (!token) throw "no token" 
        const correct = jwt.verify(token, TOKEN_SECRET);
        if (!correct) throw "no correct token" 
        const user = await userController.readOne(correct.userId);
        if (!user) throw "no user";
        req.body.user = user
        next()
    }
    catch {
        res.sendStatus(401)
    }
}

// async function auth(req, res, next) {
//     try {
//         let token = req.headers.autherization?.split('Bearer ')[1]
//         let user = { _id: details._id, email: details.email }
//         req.body.user = user
//         next()
//     }
//     catch {
//         res.sendStatus(401)
//     }
// }



module.exports = {
    auth,
    createToken
}