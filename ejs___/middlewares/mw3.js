const mw3 = (param) => {
	return (req, res, next) => {
		req.mw3 = 'MW3 - ' + param
		next()
	}
}

module.exports = mw3