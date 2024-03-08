const { number } = require('joi');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    comment: { type: String, required: true, trim: true },
    user: { type: mongoose.ObjectId, ref: 'user', required: true, trim: true },
    post: { type: mongoose.ObjectId, ref: 'post', trim: true },
    salary: { type: Number, default: 0 },
    isDeleted: { type: Boolean, default: false },
    deletedBy: { type: mongoose.ObjectId, ref: 'user' }
}, {
    timestamps: true
});

module.exports = mongoose.model('comment', CommentSchema);