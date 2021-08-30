// 정적 HTML, 동적 HTML



/********************** global init *********************/
const port = 3000
const express = require('express')
const app = express()


/********************** router init *********************/
app.get ('/', (req, res, next) => {})


/********************** server init *********************/
app.listen(port, () => { console.log('http://127.0.0.1:'+port) })