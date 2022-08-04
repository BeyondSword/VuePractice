const model = require('./model.js');
const mongoose = require('mongoose');

// let obj = new mongoose.Types.ObjectId("62ea5ead6adb2fe79a286968");
// console.log(model.getPostById(obj));

let single =
{
  title: 't1',
  content: '随便写点什么',
  category: 'cat-a',
  tagList: [ {name: 'tag-b'}, {name: 'tag-c'} ],
  likedCount: 100,
  comment: [{
    author: 'aa',
    content: 'bbb',
    likedCount: 1000
  },
  {
    author: "bb小子",
    content: 'ssxf',
    likedCount: 394
  }]
};

model.insert(single);