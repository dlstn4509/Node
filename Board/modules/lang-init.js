module.exports = _lang => {
	lang = _lang.toUpperCase()
	switch(lang) {
		case 'KO':
			return {
				ERROR: {
					NOT_FOUND 		: '존재하지 않는 데이터 입니다.',
				},
				GLOBAL: {
					LOGO					: '노드 게시판',
					TAB_TITLE			: '혼자 만든 게시판',
					NAVI					: ['게시글 등록', '게시글 리스트']
				},
				LIST: {
					TITLE 				: '게시글 리스트 입니다.',
					DESC 					: '노드 게시판 게시글 등록페이지 입니다.',
				},
				VIEW: {
					TITLE 				: '도서 상세 정보',
					DESC 					: '선택하신 도서의 상세 정보 입니다.',
				},
				CREATE: {
					TITLE 				: '게시글 등록',
					DESC 					: '등록할 게시글을 아래에서 입력하세요.',
				},
				WRITE: {
					TITLE 				: '게시글 수정',
					DESC 					: '수정할 도서 내용을 아래에서 변경하세요.',
				},
				FIELD : {
					NO						: '번호',
					TITLE					: '제목',
					WRITER				: '작성자',
					CONTENT				: '내용',
					DATE					: '작성일',
					VIEWCOUNT			: '조회수',
					STATUS				: '판매',
					UPFILE				: '첨부파일',
				},
				BT: {
					UPDATE				: '수정',
					DELETE				: '삭제',
					CREATE				: '등록',
					LIST					: '리스트',
					RESET					: '다시 등록',
				},
				MSG: {
					DELETE				: '정말로 삭제하시겠습니까?'
				}
			}
		case 'EN': 
			return {
				ERROR: {
					NOT_FOUND 		: 'Data Not Found',
				},
				GLOBAL: {
					LOGO					: 'BOOK MANAGEMENT SYSTEM',
					TAB_TITLE			: 'Express Board',
					NAVI: 				['Book Register', 'Book List']
				},
				LIST: {
					TITLE 				: 'Book List',
					DESC 					: 'This is a list of registered books.',
				},
				VIEW: {
					TITLE 				: 'Book Detail Information',
					DESC 					: 'Detailed information of the selected book.',
				},
				CREATE: {
					TITLE 				: 'Book Register',
					DESC 					: 'Please enter the book you wish to register below.',
				},
				UPDATE: {
					TITLE 				: 'Book Update',
					DESC 					: 'Change the contents of the book to be edited below.',
				},
				FIELD : {
					NO						: 'No',
					TITLE					: 'Title',
					WRITER				: 'Writer',
					CONTENT				: 'Content',
					DATE					: 'Date',
					COVER					: 'Cover',
					STATUS				: 'Status',
					UPFILE				: 'Attachment file',
				},
				BT: {
					UPDATE				: 'UPDATE',
					DELETE				: 'DELETE',
					CREATE				: 'CREATE',
					LIST					: 'LIST',
					RESET					: 'RESET',
				},
				MSG: {
					DELETE				: 'Are you sure you want to delete it?'
				}
			}
	}
}