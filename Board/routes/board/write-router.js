const path = require('path')
const express = require('express')
const router = express.Router()
const createError = require('http-errors')
const { pool } = require('../../modules/mysql-init')
const createPager = require('../../modules/pager-init')

router.get('/', (req, res, next) => {
	req.app.locals.PAGE = 'CREATE'
	const js = 'board/write'
	const css = 'board/write'
	const board = null
	res.status(200).render('board/write', { js, css, board })
})

module.exports = router