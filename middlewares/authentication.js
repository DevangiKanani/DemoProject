const passport = require('passport');
const CustomError = require('../utils/customeError');

const handleJWT = (req, res, next, roles) => async (err, user, info) => {
    try {
        if (err || info || !user) {
            throw new CustomError('Unauthorized access', 401)
        }
        if (roles) {
            if (!roles.includes(user.role.name)) {
                throw new CustomError("You don't have sufficient access permission!",403)
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