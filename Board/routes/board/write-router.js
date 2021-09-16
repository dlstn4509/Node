const path = require('path')
const express = require('express')
const router = express.Router()
const createError = require('http-errors')
const { pool } = require('../../modules/mysql-init')
const {relPath} = require('../../modules/util')

router.get('/', (req, res, next) => {
	req.app.locals.PAGE = 'CREATE'
	const js = 'board/write'
	const css = 'board/write'
	const board = null
	res.status(200).render('board/write', { js, css, board })
})


router.get('/:id', async (req, res, next) => {
	req.app.locals.PAGE = 'CREATE'
	let sql, values
	try {
		sql =
		`SELECT B.*,
		F.realName, F.saveName, F.id
		FROM board B
		LEFT JOIN files F ON B.id = F.fid AND F.status > '0'
		WHERE B.id=?
		`
		const values = [req.params.id]
		const [[board]] = await pool.execute(sql, values)

		if(board) {
			const js = 'board/write'
			const css = 'board/write'
			board.upfile = board.saveName ? relPath(board.saveName) : null
			res.status(200).render('board/write', {css, js, board})
			// res.json(board)
		}
		else {
			next(createError(400, NO_EXIST))
		}
	}
	catch (err) {
		next(createError(err))
	}
})

module.exports = router