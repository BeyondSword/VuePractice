const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var TagSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    articleCount: Number,
    lists: [{
        title: String
    }],
});

module.exports = mongoose.model('Tag', TagSchema);