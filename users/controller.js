const express = require('express')
const router = express.Router()

const userService = require('./service')

router.post('/authenticate', authenticate)

function authenticate (req, res, next) {
    userService.authenticate(req.body)
        .then(u => u ? res.json(u) : res.status(400).json({ message: 'Username or password unknown.' }))
        .catch(err => next(err))
}

module.exports = router