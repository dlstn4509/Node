const path = require('path')
const express = require('express')
const router = express.Router()
const createError = require('http-errors')
const { pool } = require('../../modules/mysql-init')

router.post('/:id', async (req, res, next) => {
	let sql, values
	try {
		const {commentWriter, commentText} = req.body
		sql = `INSERT INTO comment SET fid=?, writer=?, comment=?`
		values = [req.params.id, commentWriter, commentText]
		await pool.execute(sql, values)
		res.redirect('/board/view/' + req.params.id)
		
	}
	catch (err) {
		next(createError(err))
	}	
})

module.exports = router