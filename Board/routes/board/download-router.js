const path = require('path')
const express = require('express')
const createError = require('http-errors')
const router = express.Router()
const { absPath } = require('../../modules/util')
const { pool } = require('../../modules/mysql-init')

router.get('/:id', async (req, res, next) => {
	let sql
	try {
		sql = "SELECT saveName, realName FROM files WHERE status > '0' AND id="+req.params.id
		const [[{saveName, realName}]] = await pool.execute(sql)
		res.status(200).download(absPath(saveName), realName)
	}
	catch(err) {
		next(createError(err))
	}
})

module.exports = router