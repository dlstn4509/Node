/****************************** global init ********************/
const port = 3000
const express = require('express')
const { fstat } = require('fs')
const app = express()
const path = require('path')

// console.log(path.join((..인자))
console.log(__dirname)       // 현재 돌고있는 폴더 -> D:\cis\Node\ejs___
console.log(__filename)      // 현재 돌고있는 파일 -> D:\cis\Node\ejs___\06.path.js
console.log(path.join(__dirname, '../', 'dabanbus')) // join()은 상대경로든 절대경로든 따지지않고 연결
console.log(path.join(__dirname, 'public')) // -> D:\cis\Node\ejs___\public
console.log("================")


app.use('/', express.static(path.join(__dirname, 'public')))


/**************************** sever function ******************/
app.listen(port, () => { console.log('http://127.0.0.1:'+port) })


