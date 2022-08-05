const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var CategorySchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    lists: [{
        title: String
    }],
});

module.exports = mongoose.model('Category', CategorySchema);