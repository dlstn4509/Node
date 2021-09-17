const path = require('path')
const fs = require('fs-extra')
const express = require('express')
const router = express.Router()
const createError = require('http-errors')
const { moveFile } = require('../../modules/util')
const { pool } = require('../../modules/mysql-init')
const { json } = require('express')

router.delete('/:id', async (req, res, next) => {
	let sql
	try {
		sql = "UPDATE board SET status='0' WHERE id = " + req.body.id
		await pool.execute(sql)

		sql = "UPDATE files SET status='0' WHERE fid = " + req.body.id
		await pool.execute(sql)

		sql = "SELECT saveName FROM files WHERE fid = " + req.body.id
		const [rs] = await pool.execute(sql)

		for(let {saveName} of rs) {
			await moveFile(saveName)
		}
		res.redirect(`/board/list`)

	}
	catch(err) {
		next(createError(err))
	}
})




module.exports = router