$('.bt-token').click(onGetToken)
$('.bt-data').click(onGetData)

var token = null
let userid = 'dlstn4509'
let apikey = '40ff3c48-5eb9-4e88-ba07-cf616af59b5d'
let tokenURL = 'http://127.0.0.1:3100/api/sign'
let dataURL = 'http://127.0.0.1:3100/api'

function onGetToken() {
	var data = {userid: userid, apikey: apikey}
	axios.post(tokenURL, data).then(getToken).catch(onError)
	
	function getToken(r) {
		token = r.data.token
		console.log(token)
	}
}

function onGetData() {
	let headers = {authorization: token}
	axios.get(dataURL, {headers}).then(getData).catch(onError)

	function getData(r) {
		console.log(r.data)
	}
}

function onError(err) {
	console.log(err)
}