document.saveWrite.addEventListener('submit', onSubmit)

function onSubmit(e) {
  e.preventDefault();
  var title = this.title.value.trim()
  if(!title) {
    alert('제목을 입력하세요.')
    this.title.focus()
    return false
  }
  this.submit();
}

