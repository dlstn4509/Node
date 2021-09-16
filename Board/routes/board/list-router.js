const express = require('express')
const moment = require('moment')
const router = express.Router()
const createError = require('http-errors')
const {pool} = require('../../modules/mysql-init')

router.get(['/', '/:page'], async (req, res, next) => {
	res.status(200).json('성공')
})

module.exports = router