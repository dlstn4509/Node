/*************** global init **************/
const port = 3000
const express = require('express')
const app = express()
const { zp, random } = require('./modules/05_util')
const _ = require('lodash')
const { includes } = require('lodash')

const books = [
	{ id: 1, name: '별주부전', content: '거북이가 용왕을...' },
	{ id: 2, name: '홍길동전', content: '아버지를 아버지라...' },
	{ id: 3, name: '심청전', content: '임당수 네이놈...' },
	{ id: 4, name: '콩쥐팥쥐전', content: '콩쥐 이것이...' },
	{ id: 5, name: '춘향전', content: '그네타다 낚였네...' },
]

/*************** router init **************/
app.get('/', (req, res, next) => {
	res.send('/입니다ㄴㅇㅇㄴ')
})

app.get('/search', (req, res, next) => {
	const q = req.query.q
	if(!q) res.status(200).json([])
	else res.status(200).json(books.filter(v => v.name.includes(q) || v.content.includes(q)))
})

app.get(['/book', '/book/:id'], (req, res, next) => {
	const id = req.params.id
	res.status(200).json(id ? books.filter(v => v.id == id) : books)
})

/*************** server init **************/
app.listen(port, () => { console.log('http://127.0.0.1:'+port) })

