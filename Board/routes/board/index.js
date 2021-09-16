const express = require('express')
const router = express.Router()

const listRouter = require('./list-router')
const writerRouter = require('./write-router')
const saveRouter = require('./save-router')
const viewRouter = require('./view-router')
const downloadRouter = require('./download-router')
// const deleteRouter = require('./delete-router')


router.post('/', saveRouter)
// router.delete('/', deleteRouter)
router.use('/list', listRouter)
router.use('/view', viewRouter)
router.use('/download', downloadRouter)
router.use('/', writerRouter)

module.exports = router


/* 
- list 					: GET 		|	/board/list, /board/list/<페이지>
- view 					: GET 		|	/board/view/<idx>
- write					: POST 		|	/board
- update				: POST 		|	/board/<idx>
- delete				: DELETE 	|	/board/<idx>
- file download	: GET 		|	/board/download/<idx>
- comment save	: POST 		|	/board/comment
*/