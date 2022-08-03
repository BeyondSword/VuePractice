var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: String,
    author: String,
    content: String,
    category: [{ name: String }],
    tagList: [{ name: String }],
    likedCount: Number,
    comment: [{ index: Number }],
    createTime: {Date}
});

module.exports = mongoose.model('Post', PostSchema);