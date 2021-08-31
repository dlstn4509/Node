/*************** global init **************/
const port = 3000
const express = require('express')
const app = express()

const books = [
	{ id: 1, name: '별주부전', content: '거북이가 용왕을...' },
	{ id: 2, name: '홍길동전', content: '아버지를 아버지라...' },
	{ id: 3, name: '심청전', content: '임당수 네이놈...' },
	{ id: 4, name: '콩쥐팥쥐전', content: '콩쥐 이것이...' },
	{ id: 5, name: '춘향전', content: '그네타다 낚였네...' },
]

/*************** middleware ***************/
// application/json
app.use(express.json())

// application/x-www-urlencoded
app.use(express.urlencoded({ extended: false }))

/*************** router init **************/
app.use('/', express.static('./public'))
app.get('/', (req, res, next) => {
	// req.params.id (/book/:id)
	// req.query.id (/book?id=2)
})

app.post('/book', (req, res, next) => {
	// req.body (type: application/json): axios.post('/book', { params: {...} })
	// req.body (type: application/x-www-urlencoded): <form method="post">...</form>
	console.log(req.body)
	res.send('받았음') 
})


/*************** server init **************/
app.listen(port, () => { console.log('http://127.0.0.1:'+port) })