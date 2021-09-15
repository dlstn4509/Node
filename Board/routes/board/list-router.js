const express = require('express')
const moment = require('moment')
const router = express.Router()
const createError = require('http-errors')
const {pool} = require('../../modules/mysql-init')

router.get(['/', '/:page'], async (req, res, next) => {
	let sql, values; 
	try {
		sql = " SELECT * FROM report "
		await pool.execute(sql)
	}
	catch (err) {
		next(createError(err))
	}
})

module.exports = router