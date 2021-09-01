/**
 * 언어(language/html/css/javascript, java, c) - 문법
 * 라이브러리(jquery, lodash) - 유틸리티 모음
 * 프레임워크(express, react, vue, spring)
 * 
 * 
 * 1. router는 사이트가 커짐에 따라 분리해야 한다.
 * 2. 예) 쇼핑몰
 * 3. 상품리스트
 * 4. 장바구니/주문/결제
 * 5. 회원가입/로그인/로그아웃/
 * 6. 마이페이지
 * 7. 커뮤니티
 */

/*************** global init **************/
require('dotenv').config()
const port = process.env.PORT // process.env는 전역변수에 들어가있는 애들 ->> .env가 등록해줌
const express = require('express')
const app = express()


/************** view engine ***************/
app.set('view engine', 'ejs')
app.set('views', './views')


/*************** middleware ***************/
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


/*************** static init **************/
app.use('/', express.static('./public'))


/*************** router init **************/
const shopRouter = require('./routes/shop')
const memberRouter = require('./routes/member')

app.use('/shop', shopRouter)
app.use('/member', memberRouter)


/*************** error init **************/
const notFoundRouter = require('./routes/error/404')
const errorRouter = require('./routes/error/500')
app.use(notFoundRouter)
app.use(errorRouter)



/*************** server init **************/
app.listen(port, () => { console.log('http://127.0.0.1:'+port) })