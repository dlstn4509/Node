const path = require('path')
const express = require('express')
const router = express.Router()
const {moveFile} = require('../../../modules/util')
const {pool} = require('../../../modules/mysql-init')

router.delete('/:id', async (req, res, next) => {
	try {
		sql = "UPDATE files SET status='0' WHERE idx = " + req.params.id
		await pool.execute(sql)
	
		sql = "SELECT saveName FROM files WHERE idx = " + req.params.id
		const [rs] = await pool.execute(sql)
	
		for(let {saveName} of rs) {
			await moveFile(saveName)
		}
		res.status(200).json({code: 200, result: 'success'})
	}
	catch(err) {
		res.status(500).json(err)
	}
})

module.exports = router