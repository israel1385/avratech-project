const express = require('express');
const app = express();
const tasksRouter = require('./app/api/task_router').tasksRouter;
const usersRouter = require('./app/api/users_router').usersRouter;
const bodyParser = require('body-parser')


app.use( bodyParser.json() );      
app.use('/tasks', tasksRouter)
app.use('/users', usersRouter)

module.exports = app