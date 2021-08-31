const mw2 = (req, res, next) => {
	req.mw2 = 'MW2'
	next()
}

module.exports = mw2