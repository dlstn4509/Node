const path = require('path')
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const { pool } = require('../../modules/mysql-init')

router.post('/', async (req, res, next) => {
	let {userid, apikey, domain = req.headers.origin} = req.body
	let sql
	try {
		sql = `SELECT * FROM users_api WHERE userid=? AND apikey=? AND domain=?`
		const [rs] = await pool.execute(sql, [userid, apikey, domain])
		if(rs.length === 1) { // token 발행
			data = {idx: rs[0].idx, userid: rs[0].userid}
			token = jwt.sign(data, process.env.JWT_SALT, {expiresIn: '1m'})
			res.status(200).json({success: true, token})
		}
		else { // error
			res.status(200).json({success: false, msg: '인증되지 않은 사용자'})
		}
	}
	catch (err) {
		res.status(500).json(err)
	}
})

module.exports = router