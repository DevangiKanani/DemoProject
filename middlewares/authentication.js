const passport = require('passport');


const handleJWT = (req, res, next, roles) => async (err, user, info) => {
    try {
        if (err || info || !user) {
            throw new Error('Unauthorized access', 401)
        }
        if (roles) {
            if (!roles.includes(user.role.name)) {
                throw new Error("You don't have sufficient access permission!",403)
            }
        }
        req.user = user;
        return next();
    } catch (error) {
        next(error)
    }
}

exports.isAuth = (roles) => (req, res, next) => {
    passport.authenticate('jwt', { session: false }, handleJWT(req, res, next, roles))(req, res, next)
}

const authenticateApiKey = (req, res, next) => {
    const apiKey = req.headers.key;
    console.log("🚀 ~ authenticateApiKey ~ apiKey:", apiKey)
    if (apiKey === process.env.API_KEY) {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

module.exports = {
    authenticateApiKey,
};

// import like this
// const authenticationMiddleware = require('../middleware/authentication');

// use this
// router.get('/user',authenticationMiddleware.authenticateApiKey, Auth.user);