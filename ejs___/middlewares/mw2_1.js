const mw2_1 = (req, res, next) => {
	req.mw2_1 = 'MW2_1'
	next()
}

module.exports = mw2_1