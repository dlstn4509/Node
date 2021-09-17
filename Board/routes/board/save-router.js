const path = require('path')
const express = require('express')
const router = express.Router()
const createError = require('http-errors')
const {pool} = require('../../modules/mysql-init')
const uploader = require('../../middlewares/multer-board-mw')
const {moveFile} = require('../../modules/util')

router.post('/', uploader.single('upfile'), async (req, res, next) => {
	let sql, values
	try {
		const {title, writer, content, _method, id } = req.body
		const isUpdate = (_method === 'PUT' && id)
		sql = isUpdate ? " UPDATE board " : " INSERT INTO board "
		sql += " SET title=?, writer=?, content=? "
		sql += isUpdate ? " WHERE id= "+id : ""
		values = [title, writer, content]
		const [board] = await pool.execute(sql, values)
		if(req.file) {
			const {originalname, mimetype, filename, size} = req.file
			if(isUpdate) {
				sql = " SELECT id, saveName FROM files WHERE fid=? AND status=? "
				values = [id, '1']
				let [rsf] = await pool.execute(sql, values)
				if(rsf.length > 0) {
					sql = " UPDATE files SET status = '0' WHERE id= " + rsf[0].id
					await pool.execute(sql)
					await moveFile(rsf[0].saveName)
				}
			}
			sql = ` INSERT INTO files SET realName=?, saveName=?, mimetype=?, size=?, fid=? `
			values = [originalname, filename, mimetype, size, (isUpdate ? id : board.insertId)]
			await pool.execute(sql, values)
		}
		res.redirect(`/board/list`)
	}
	catch (err) {
		next(createError(err))
	}
})


module.exports = router