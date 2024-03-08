const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Role = new Schema({
    name: { type: String, require: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('roles', Role);