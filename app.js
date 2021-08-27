/****************************** global init ********************/
const port = 3000
const express = require('express')
const app = express()


/***************************** reuter init ********************/
app.get = ('/', (req, res) => {})


/**************************** sever function ******************/
app.listen(port, () => { console.log('http://127.0.0.1:'+port) })