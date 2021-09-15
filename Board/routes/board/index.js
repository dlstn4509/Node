const express = require('express')
const router = express.Router()

const listRouter = require('./list-router')


router.use('/', listRouter)

module.exports = router