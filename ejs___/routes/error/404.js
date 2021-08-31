const express = require('express')
const router = express.Router()
const createError = require('http-errors')

router.use((req, res, next) => {
	next(createError(404, '서버오류임ee'))
})

module.exports = router