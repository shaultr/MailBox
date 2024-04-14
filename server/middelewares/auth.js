require("dotenv").config();
const jwt = require("jsonwebtoken");

const TOKEN_SECRET = process.env.TOKEN_SECRET;

 function createToken(user) {
    const token = jwt.sign({ userId: user._id, email: user.email }, TOKEN_SECRET, { expiresIn: '1h' });
    // console.log(token);
    return token
}
async function auth(req, res, next) {
    try {
        let token = req.headers.autherization?.split('Bearer ')[1]
        let user = { _id: "6613fd4dc99c87c7ce151ce5", email: "shaul@gmail.com" }//jwt.verify(token,secret)
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
    //         if (!token) {
    //             console.error('Bearer token missing in Authorization header');
    //             return res.status(401).send('Bearer token missing in Authorization header');
    //         }
    //         const details = jwt.verify(token, process.env.TOKEN_SECRET);
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