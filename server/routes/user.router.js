const express = require('express'),
    router = express.Router();

const userService = require('../BL/user.service')
const { auth } = require('../middlewares/auth')

router.get('/:userId', async (req, res) => {
    try {
        let result = await userService.getUserById()
        res.send(result)
    }
    catch (err) {
        res.status(400).send(err.msg || err.message || "wrong")
    }

})

router.post('/:userId', async (req, res) => {
    try {
        let result = await emailService.addNewUser(req.params.emailId, req.body)
        res.send(result)
    }
    catch (err) {
        res.status(400).send(err.msg || err.message || "wrong")
    }

})



module.exports = router;