const express = require('express');
const path = require('path')
const db = require(path.join('../../models'))
const User = db.User;
const usersRouter = express.Router()

usersRouter.post('/', (req, res) => {
    User.create({}).then((user) => {
        res.send(user)
    }).catch(e => console.log(e))
})

module.exports.usersRouter = usersRouter