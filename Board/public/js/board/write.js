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

if(document.querySelector('#btRemoveFile')) document.querySelector('#btRemoveFile').addEventListener('click', onRemoveFile)

function onRemoveFile(e) {
  console.log(this.parentNode)
}

function onRemoveFile(e) {
  var id = this.dataset['id'];
  var parent = this.parentNode;
  axios.delete('/api/board/file/' + id).then(onSuccess).catch(onError)

  function onSuccess(r) {
    if(r.data.code === 200) parent.remove()
  }
  
  function onError(err) {
    console.log(err)
    console.log(err.response)
  }
}