const path = require('path')
const express = require('express')
const router = express.Router()
const createError = require('http-errors')
const { pool } = require('../../modules/mysql-init')
const uploader = require('../../middlewares/multer-board-mw')

router.post('/', uploader.fields([{name: 'upfile'}]), async (req, res, next) => {
	let sql, values
	try {
		const {title, writer, content} = req.body
		sql = `INSERT INTO board SET title=?, writer=?, content=?`
		values = [title, writer, content]
		const [rs] = await pool.execute(sql, values)

		/* 		if(req.files) {
	const [k, [v]] = req.files
			sql = `INSERT INTO files SET realname=?, savename=?, mimetype=?, size=?, fid=?`
			values = [v.originalname, v.filename, v.mimetype, v.size, rs.insertId]
			await pool.execute(sql, values)
			console.log(v)
		} */
		res.redirect('/board/list')
	}
	catch (err) {
		next(createError(err))
	}
})

module.exports = router