const express = require('express'),
    router = express.Router();

const emailService = require('../BL/email.sevice')
const userService = require('../BL/user.service')
const { auth } = require('../middelewares/auth')

//get inbox emails
router.get('/inbox',auth, async (req, res) => {
    const filter = {
        _id:  req.body.user._id,
        emails: {
            $elemMatch: {
                isRecieved: true
            }
        }
    }
    try {
        const inbox = await userService.getEmailsByFilter(filter, true);
        res.send(inbox)
    }
    catch (err) {
        res.status(400).send(err.msg || err.message || "wrong")
    }

})
//get sent emails
router.get('/sent',auth, async (req, res) => {
    const filter = {
        _id:  req.body.user._id,
        emails: {
            $elemMatch: {
                isSent: true
            }
        }
    }
    try {
        const sent = await userService.getEmailsByFilter(filter, true);
        res.send(sent)
    }
    catch (err) {
        res.status(400).send(err.msg || err.message || "wrong")
    }

})



//create new email
router.post('/', async (req, res) => {
    try {
        let result = await emailService.createNewEmail(req.body)
        res.send(result)
    }
    catch (err) {
        res.status(400).send(err.msg || err.message || "wrong")
    }

})

//add message to email
router.post('/:emailId', async (req, res) => {
    try {
        let result = await emailService.addNewMessageToEmail(req.params.emailId, req.body)
        res.send(result)
    }
    catch (err) {
        res.status(400).send(err.msg || err.message || "wrong")
    }

})



module.exports = router;