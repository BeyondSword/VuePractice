// 定义表结构
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//隐藏 _id
var PostSchema = new Schema({
    title: String,
    author: String,
    content: String,
    category: String,
    tagList: [{ name: String }],
    likedCount: Number,
    comment: [{
        author: String,
        content: String,
        likedCount: Number
    }],
    createTime: {Date},
    modifiedTime: {Date},
}, {
    strictQuery: true
});

module.exports = mongoose.model('Post', PostSchema);