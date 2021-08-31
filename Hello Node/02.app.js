const express = require('express')
const app  = express()
const host = '127.0.0.1'
const port = 3000

app.listen(port, () => { console.log(`http://${host}:${port}`) })

app.get('/', (req, res) => {
  let { name } = req.query
  res.status(200).send(`<h1>Hello, ${name || 'John Doe'}</h1>`)
})

app.get('/hello', (req, res) => {
  res.status(200).send(`
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello, Node</title>
</head>
<body>
  <h1>Hello Node</h1>
</body>
</html>
  `)
})