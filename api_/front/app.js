// npm i express uuid dotenv cors ejs mysql2 http-errors jsonwebtoken lodash numeral moment morgan

/****************************** global init ********************/
require('dotenv').config()
const port = process.env.PORT
const path = require('path')
const express = require('express')
const app = express()


/****************************** sever init ******************/
require('./modules/server-init')(app, process.env.PORT)


/****************************** view engine *******************/
app.set('view engine', 'ejs')
app.set('views', './views')
app.locals.pretty = true



/****************************** middleware ********************/
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



/***************************** static init ********************/
app.use('/', express.static(path.join(__dirname, 'public')))



/***************************** router init ********************/
// const Router = require('./routes/')

// app.use('/', Router)



/***************************** error init ********************/
const _404Router = require('./routes/error/404-router')
const _500Router = require('./routes/error/500-router')
app.use(_404Router)
app.use(_500Router)




