const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const { pool } = require('../../modules/mysql-init')

router.get('/', async (req, res, next) => {
	try {
		
	}
	catch (err) {
		res.status(500).json(err)
	}
})

module.exports = router