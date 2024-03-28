async function auth(req, res, next) {
    try{
        let token = req.headers.autherization?.split('Bearer ')[1]
        let user = { _id: "66029a146e79f2427d4e95b4", email: "shaul@gmail.com" }//jwt.verify(token,secret)
        req.body.user = user
        next()
    }
    catch{
        res.sendStatus(401)
    }
}



module.exports= {auth}