// mysql -u root -p
/****************************** global init ********************/
require('dotenv').config()
const port = process.env.PORT
const path = require('path')
const express = require('express')
const app = express()



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
const notFoundRouter = require('./routes/error/404')
const errorRouter = require('./routes/error/500')
app.use(notFoundRouter)
app.use(errorRouter)



/**************************** sever function ******************/
app.listen(port, () => { console.log('http://127.0.0.1:'+port) })

