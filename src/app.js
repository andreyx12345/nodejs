const express = require('express')
const hbs = require('hbs')
const path = require('path')
const todoListRouter = require('./routers/todolist')

const app = express()

// Rutas para configuracion de HBS
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, 'templates/views')
const partialsPath = path.join(__dirname, 'templates/partials')

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath)

// app.use(express.json())
app.use(express.static(publicDirectoryPath))

// Router to especific
app.use(todoListRouter)
// app.use(xxxxRouter)

module.exports = app
