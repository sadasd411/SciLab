
// create our own middleware
//		if a user is NOT logged in, then send a error response back
const jwt = require('jsonwebtoken');

module.exports = {
	authenticate(req, res, next) {
		jwt.verify(req.cookies.usertoken,
			process.env.JWT_SECRET,
			// once we compare the unhashed version of the cookie, run this callback function
			(err, payload) => {
				if(err) {
					// this is not a valid token OR the cookie doesn't exist
					res.status(401).json({ verified: false });
				} else {
					// err is null, so it verified correctly
					console.log("All good to proceed");
					next();
				}
			}
			)

	}
}