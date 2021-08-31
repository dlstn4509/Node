const mw3_1 = (param) => {
	return (req, res, next) => {
		req.mw3_1 = 'MW3_1 - ' + param
		next()
	}
}

module.exports = mw3_1