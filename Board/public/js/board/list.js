document.querySelectorAll('.board-tbl tbody tr').forEach(function(v, i) {
	v.addEventListener('click', function(e) {
		location.href = '/board/view/' + this.dataset['id']
	})
})