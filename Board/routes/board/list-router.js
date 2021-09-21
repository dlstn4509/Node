const express = require('express')
const moment = require('moment')
const router = express.Router()
const createError = require('http-errors')
const {pool} = require('../../modules/mysql-init')
const {cutTail, chgStatus} = require('../../modules/util')
const createPager = require('../../modules/pager-init')
const {NO_EXIST} = require('../../modules/lang-init')

router.get(['/', '/:page'], async (req, res, next) => {
	req.app.locals.PAGE = 'LIST'
	let sql, values;
	try {
		sql = "SELECT COUNT(id) FROM board WHERE status > '0'"
    const [[cnt]] = await pool.execute(sql)
    const totalRecord = cnt['COUNT(id)']
    const page = Number(req.params.page || 1)
    const pager = createPager(page, totalRecord, 5, 3)

		
		sql = `
		SELECT * FROM board WHERE status > '0'
		ORDER BY board.id DESC
		LIMIT ?, ?
		`
		values = [pager.startIdx.toString(), pager.listCnt.toString()]
		const [board] = await pool.execute(sql, values)
		board.forEach(v => {
			v.createdAt = moment(v.createdAt).format('YYYY-MM-DD')
			v.content = cutTail(v.content)
			v.writer = v.writer || '미상'
			v.status = chgStatus(v.status)
			v.viewCount = String(v.viewCount)
		})
		const js = 'board/list'
		const css = 'board/list'
		res.status(200).render('board/list', {js, css, board, pager})
		// res.json(board)
	}
	catch (err) {
		next(createError(err))
	}






})

module.exports = router