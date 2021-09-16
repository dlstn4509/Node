const express = require('express')
const router = express.Router()

const listRouter = require('./list-router')
const writerRouter = require('./write-router')
const saveRouter = require('./save-router')


router.post('/', saveRouter)
router.get('/', writerRouter)
router.use('/list', listRouter)

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