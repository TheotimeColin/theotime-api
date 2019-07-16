const express = require('express')
const router = express.Router()

const userService = require('./service')

router.get('/', getAll)
router.post('/authenticate', authenticate)

async function authenticate (req, res, next) {
    try {
        const user = await userService.authenticate(req.body)

        if (user) {
            res.json(user)
        } else {
            res.status(400).json({ message: 'Username or password unknown.' })
        }
    } catch (e) {
        next(e)
    }
}

async function getAll (req, res, next) {
    try {
        const users = await userService.getAll()
        res.json(users)
    } catch (e) {
        next(err)
    }
}

module.exports = router