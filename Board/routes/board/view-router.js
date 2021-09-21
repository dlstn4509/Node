const path = require('path')
const express = require('express')
const router = express.Router()
const createError = require('http-errors')
const { pool } = require('../../modules/mysql-init')
const { NO_EXIST } = require('../../modules/lang-init')
const moment = require('moment')
const {relPath} = require('../../modules/util')

router.get('/:id', async (req, res, next) => {
	req.app.locals.PAGE = 'VIEW'
	let sql, values;
	try {
		sql = `SELECT B.*, F.realName, F.saveName, F.mimetype, F.fid FROM board B LEFT JOIN files F ON B.id = F.fid AND F.status > '0' WHERE B.status > '0' AND B.id=?`
		values = [req.params.id]
		const [[board]] = await pool.execute(sql, values)
		
		if(board) {
			board.createdAt = moment(board.createdAt).format('YYYY-MM-DD HH:mm:ss')
			board.upfile = board.saveName ? relPath(board.saveName) : null
			const js = 'board/view'
			const css = 'board/view'
			res.status(200).render('board/view', {css, js, board})
		}
		else next(createError(400, NO_EXIST))
		
	}
	catch (err) {
		next(createError(err))
	}
})

module.exports = router