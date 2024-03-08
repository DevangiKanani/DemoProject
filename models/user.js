const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const CustomError = require('../utils/customeError');
const Schema = mongoose.Schema;
require('dotenv').config();

const UserSchema = new Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    DOB: { type: Date, required: true },
    profile: { type: String, trim: true },
    role: { type: mongoose.ObjectId, ref: 'roles', required: true },
    isDeleted: { type: Boolean, default: false }
}, {
    timestamps: true
});

UserSchema.pre('save', async function (next) {
    try {
        const user = await mongoose.models['user'].findOne({ _id: { $ne: this._id }, email: this.email, isDeleted: false })
        if(user) throw new Error({ status: 409, data: 'email already exits' })
        // user ? next(new Error({ status: 409, message: 'email already exits' })) : next();
    } catch (error) {
        console.log("🚀 ~ error:", error)
        next(error);
    }
})

UserSchema.pre('save', async function (next) {
    try {
        const hash = await bcrypt.hash(this.password, parseInt(process.env.SALT))
        this.password = hash;
    } catch (error) {
        next(error)
    }
})

UserSchema.methods.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('user', UserSchema);