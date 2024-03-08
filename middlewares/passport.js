const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const JWTStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const USER = require('../models/user');

passport.use('login', new localStrategy({
    usernameField: 'email',
    passReqToCallback: 'password',
    passReqToCallback: false
}, async (email, password, done) => {
    console.log("----------------******");
    try {
        const user = await USER.findOne({ email, isDeleted: false })
        if (!user) return done(new Error('Invalid email'))
        if (!await user.isValidPassword(password)) return done({ message: 'Invalid password' }, false, null)
        return done(null, user, { message: 'User logged in sucessfully' })
    } catch (error) {
        return done(error, false)
    }
}))

const jwtStrategyOts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET_KET
}

passport.use(new JWTStrategy(jwtStrategyOts, async (jwtPayload, done) => {
    try {
        let user = await USER.findOne({ _id: jwtPayload['_id'], isDeleted: false }).populate('role');
        if (user) { return done(null, user) }
        else { return done('Invalid access token') };
    } catch (error) {
        done(error);
    }
}))