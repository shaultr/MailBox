const express = require('express'),
    router = express.Router();

const chatService = require('../BL/chat.sevice')
const userService = require('../BL/user.service')
const { auth } = require('../middelewares/auth')

router.get('/', auth, async (req, res) => {
    try {
        let result = await chatService.getNumNotRead(req.body.user._id)
        res.send({result})
    }
    catch (err) {
        res.status(400).send(err.message) 
    }
})
router.get('/emailById/:emailId', auth, async (req, res) => {
    try {
        let result = await chatService.getChatById(req.body.user._id, req.params.emailId)
        res.send(result)
    }
    catch (err) {
        res.status(400).send(err.message)
    }
})

router.get('/:flag', auth, async (req, res) => {
    try {
        let result = await chatService.getChats(req.body.user._id, req.params.flag)
        res.send(result)
    } 
    catch (err) {
        res.status(400).send(err.message)
    }
})



//get inbox emails
// router.get('/inbox', auth, async (req, res) => {

//     try {
//         const inbox = await userService.getInboxChat(req, true);
//         res.send(inbox)
//     }
//     catch (err) {
//         res.status(400).send(err.msg || err.message || "wrong")
//     }

// })

//get sent emails
router.get('/sent', auth, async (req, res) => {
    const filter = {
        _id: req.body.user._id,
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
        let result = await chatService.createNewEmail(req.body)
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