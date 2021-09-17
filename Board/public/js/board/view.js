document.querySelector('#btDelete').addEventListener('click', onDelete)
function onDelete(e) {
	if(confirm(this.dataset['msg'])) {
		document.deleteForm.submit();
	}
}

document.querySelector('#btUpdate').addEventListener('click', onUpdate)
function onUpdate(e) {
	location.href = '/board/' + this.dataset['id']
	// location.href = `/board/'15'`
}