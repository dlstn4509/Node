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
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


/*************** router init **************/
app.use('/', express.static('./public'))

app.get('/book', (req, res, next) => {
	const reverseBooks = books.slice().reverse();
	let html = `
	<!DOCTYPE html>
	<html lang="ko">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title></title>
		<link rel="stylesheet" href="../css/all.min.css">
		<link rel="stylesheet" href="../css/bootstrap.min.css">
		<link rel="stylesheet" href="../css/base.css">
		<link rel="stylesheet" href="../css/list.css">
		<script src="../js/jquery.min.js"></script>
		<script src="../js/moment.min.js"></script>
		<script src="../js/lodash.min.js"></script>
		<script src="../js/axios.min.js"></script>
		<script src="../js/promise.polyfill.min.js"></script>
		<script src="../js/util.js"></script>
	</head>
	<body>
		<div class="container pt-3">
			<div class="alert alert-primary mb-3 d-flex justify-content-between align-items-center">
				<h1 style="font-size: 1.25em;">
					<i class="fa fa-book"></i> 도서관리시스템
				</h1>
				<ul class="breadcrumb mb-0">
					<li class="breadcrumb-item active">도서 리스트</li>
					<li class="breadcrumb-item"><a href="/book/write.html">도서 작성</a></li>
				</ul>
			</div>
			<table class="book-tbl table table-striped table-hover text-center border-bottom">
				<thead class="thead-dark">
					<tr>
						<th>번호</th>
						<th>제목</th>
						<th>내용</th>
					</tr>
				</thead>
				<tbody>`
	for(let book of reverseBooks) {
		html += `<tr>`;
		html += `	<td>${book.id}</td>`;
		html += `	<td>${book.name}</td>`;
		html += `	<td>${book.content}</td>`;
		html += `</tr>\n`;
	}
	html += `</tbody>
			</table>
		</div>
		<script src="../js/list.js"></script>
	</body>
	</html>`;
	res.status(200).send(html)
})

app.post('/book', (req, res, next) => {
	const { name, content } = req.body
	const id = books[books.length - 1].id + 1
	books.push({ id, name, content })
	res.status(200).redirect('/book')
})


/*************** server init **************/
app.listen(port, () => { console.log('http://127.0.0.1:'+port) })