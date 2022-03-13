
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tintuc = new Schema({
    author: { type: String },
    title: { type: String },
    content: {type: String },
    date: { type: Date, default: Date.now()}
});

module.exports = mongoose.model('tintuc', tintuc)