const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    user: { type: mongoose.ObjectId, ref: 'user', required: true },
    comments: [{ type: mongoose.ObjectId, ref: 'comment' }],
    archive: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('post', PostSchema);