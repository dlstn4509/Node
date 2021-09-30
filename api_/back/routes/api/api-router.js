const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const { pool } = require('../../modules/mysql-init')

router.get('/', async (req, res, next) => {
	let token = req.headers.authorization
	let sql
	try {
		jwt.verify(token, process.env.JWT_SALT, async (err, decode) => {
			if(err) {
				data = {idx: rs[0].idx, userid: rs[0].userid}
				token = jwt.sign(data, process.env.JWT_SALT, {expiresIn: '10s'})
			}
			else {
				sql = `SELECT * FROM books ORDER BY idx DESC`
				const [books] = await pool.execute(sql)
				res.status(200).json({success: true, books})
			}
		})
	}
	catch (err) {
		res.status(500).json(err)
	}
})

module.exports = router