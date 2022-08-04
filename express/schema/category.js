// 定义表结构
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//隐藏 _id
var CategorySchema = new Schema({
    name: String,
    articles: [{
        name: String
    }],
});

module.exports = mongoose.model('Category', CategorySchema);