/****************************** global init ********************/
require('dotenv').config()
const port = process.env.PORT
const path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')


/****************************** sever init ******************/
require('./modules/server-init')(app, process.env.PORT)


/****************************** view engine *******************/
app.set('view engine', 'ejs')
app.set('views', './views')
app.locals.pretty = true



/****************************** middleware ********************/
app.use(cors({credentials: true}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



/***************************** static init ********************/
app.use('/', express.static(path.join(__dirname, 'public')))



/***************************** router init ********************/




/***************************** error init ********************/
const _404Router = require('./routes/error/404-router')
const _500Router = require('./routes/error/500-router')
app.use(_404Router)
app.use(_500Router)





