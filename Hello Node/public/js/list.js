axios.get('/book', {}).then(onGetBook).catch(onError)

function onGetBook(r) {
	var books = r.data;
	books.forEach(function(book) {
		var html = '<tr>';
		html += '<td>'+book.id+'</td>';
		html += '<td>'+book.name+'</td>';
		html += '<td>'+book.content+'</td>';
		html += '</tr>';
		$('.book-tbl tbody').append(html);
	})
}

function onError(err) {
	console.log(err)
}