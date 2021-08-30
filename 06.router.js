// 정적 HTML, 동적 HTML



/********************** global init *********************/
const port = 3000
const express = require('express')
const app = express()


/********************** router init *********************/
// Middleware 중간처리 과정, 하고 next로 넘어감
// app.use() 는 GET/POST 가리지 않고 다 받는다
app.use((req, res, next) => {
  req.dabanbus = 'dabanbus'
  next()
})

// Static Router
app.use('/', express.static('./public'))

// Get Router
app.get('/', (req, res, next) => {
  res.send('index.html이 없어요.' + req.dabanbus)
})

// Get Router
app.get('/book', (req, res, next) => {
  res.send('/book')
})

// POST Router
app.post('/book', (req, res, next) => {
  res.send('post/book 입니다')
})



/********************** server init *********************/
app.listen(port, () => { console.log('http://127.0.0.1:'+port) })