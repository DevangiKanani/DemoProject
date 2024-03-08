const passport = require('passport');
const jwt = require('jsonwebtoken');
const USER = require('../models/user');
const ROLE = require('../models/role');
require('dotenv').config();

exports.signup = async (req, res, next) => {
    try {
        const payload = req.body;
        const role = await ROLE.findOne({ name: 'User' });
        payload.role = role['_id'];
        payload.profile = req.file.originalname
        const user = await USER.create(payload);
        res.status(200).json({ data: user, message: 'User created sucessfully' })
    } catch (error) {
        next(error)
    }
}

exports.login = async (req, res, next) => {
    passport.authenticate('login', async (err, user, info) => {
        try {
            if (err || !user) throw new Error(err.message);
            req.login(user, { session: false }, async (err) => {
                if (err) throw new Error(err);
                const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KET)
                return res.json({ token })
            })
        } catch (error) {
            next(error)
        }
    })(req, res, next)
}

exports.getUserData = async (req, res, next) => {
    try {
        const startDate = new Date(req.query.startDate)
        const endDate = new Date(req.query.endDate)
        const user = await USER.find({ DOB: { $gte: startDate, $lte: endDate } })
        res.status(200).json({ data: user })
    } catch (error) {
        next(error)
    }
}