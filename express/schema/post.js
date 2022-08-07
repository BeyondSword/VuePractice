// 定义表结构
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//隐藏 _id
var PostSchema = new Schema({
    title: String,
    author: String,
    content: String,
    intro: String,
    category: String,
    tagList: [{ name: String }],
    viewCount: Number,
    likedCount: Number,
    commentCount: Number,
    createTime: Date,
    modifiedTime: Date,
    comment: [{
        author: String,
        content: String,
        likedCount: Number
    }],
}, {
    strictQuery: true
});

module.exports = mongoose.model('Post', PostSchema);