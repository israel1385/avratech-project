const express = require('express');
const tasksRouter =express.Router();

tasksRouter.get('/',function(req,res){
    res.send('birds home page')
})
tasksRouter.get('/about',function(req,res){
    res.send('about birds')
})
module.exports.tasksRouter=tasksRouter