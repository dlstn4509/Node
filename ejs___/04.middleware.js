/****************************** global init ********************/
const port = 3000
const express = require('express')
const app = express()
const mw2 = require('./middlewares/mw2')
const mw3 = require('./middlewares/mw3')
const mw2_1 = require('./middlewares/mw2_1')
const mw3_1 = require('./middlewares/mw3_1')





/**************************** middle ware ******************/
/**
 * app.use() ->> get, host, put, delete 모두 받음
 * app.get() ->> get만 받음
 * app.post()
 * app.put()
 * app.delete()

 * middle vs router
 * middleware = app.use((req, res, net) => {})
 * reoyer = app.use('조수부, (req, res, net) => {}) 
 */

// middle ware 만들기

// 1 ~ 3 모든 요청에 대한 middle ware
// 1번 방식
app.use((req, res, next) => {
	req.mw1 = 'MW1'
	next()
})

// 2번 방식 - 함수 선언
/* const mw2 = (req, res, next) => {
	req.mw2 = 'MW2'
	next()
} */
app.use(mw2)

// 3번 방식 - 클로져 패턴
/* const mw3 = (param) => {
	return (req, res, next) => {
		req.mw3 = 'MW3 - ' + param
		next()
	}
} */
app.use(mw3('aa'))

app.get('/', (req, res, next) => {
	// const {headers, baseUrl, hostname, ip, originalUrl, path, subdomains} = req
	const {headers, mw1, mw2, mw3, mw4, mw5} = req
	res.json({headers, mw1, mw2, mw3, mw4, mw5});
})

// 4, 5, 2_1, 3_1 은 특정 라우터에서만 middle ware 사용
// 4번 방식
app.get('/test', (req, res, next) => {
	req.mw4 = '---MW4'
	next()
}, (req, res, next) => {
	req.mw5 = '---MW5'
	next()
}, (req, res, next) => {
	const {headers, mw1, mw2, mw3, mw4, mw5, mw2_1, mw3_1} = req
	res.json({headers, mw1, mw2, mw3, mw4, mw5, mw2_1, mw3_1});
})

// 5번 방식
app.get('/test', mw2_1, mw3_1, (req, res, next) => {
	const {headers, mw1, mw2, mw3, mw4, mw5, mw2_1, mw3_1} = req
	res.json({headers, mw1, mw2, mw3, mw4, mw5, mw2_1, mw3_1});
})








/**************************** sever function ******************/
app.listen(port, () => { console.log('http://127.0.0.1:'+port) })


