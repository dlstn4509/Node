$('.bt-data').click(onGetData)

var token = null
let apikey = '40ff3c48-5eb9-4e88-ba07-cf616af59b5d'
let dataURL = 'http://127.0.0.1:3100/api2'

function onGetData() {
	axios.get(dataURL + '?apikey=' + apikey).then(getData).catch(onError)

	function getData(r) {
		console.log(r.data)
	}
}

function onError(err) {
	console.log(err)
}