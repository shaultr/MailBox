async function auth(req, res, next) {
    try{
        let token = req.headers.autherization?.split('Bearer ')[1]
        let user = { _id: "6613a6ab8e646f6ffdf246af", email: "shaul@gmail.com" }//jwt.verify(token,secret)
        req.body.user = user
        next()
    }
    catch{
        res.sendStatus(401)
    }
}



module.exports= {auth}