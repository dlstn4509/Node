/*************** global init **************/
const port = 3000
const express = require('express')
const app = express()
const { zp, random } = require('./modules/05_util')

const books = [
	{ id: 1, name: '별주부전', content: '거북이가 용왕을...' },
	{ id: 2, name: '홍길동전', content: '아버지를 아버지라...' },
	{ id: 3, name: '심청전', content: '임당수 네이놈...' },
	{ id: 4, name: '콩쥐팥쥐전', content: '콩쥐 이것이...' },
]

/*************** router init **************/
app.get('/', (req, res, next) => {
	res.send('/ 입니다.')
})

app.get('/test', (req, res, next) => {
	res.send('/test 입니다.')
})

app.get('/book', (req, res, next) => {
	res.status(200).json(books)
})

app.get('/book/1', (req, res, next) => {
	const book = books.filter(v => v.id === 1)
	res.status(200).json(book)
})

app.get('/book/2', (req, res, next) => {
	const book = books.filter(v => v.id === 2)
	res.status(200).json(book)
})

app.get('/book/3', (req, res, next) => {
	const book = books.filter(v => v.id === 3)
	res.status(200).json(book)
})

app.get('/book/4', (req, res, next) => {
	const book = books.filter(v => v.id === 4)
	res.status(200).json(book)
})


/*************** server init **************/
app.listen(port, () => { console.log('http://127.0.0.1:'+port) })

