// import Mock from 'mockjs';
let Post = require("./schema/post.js");
const db = require("./db.js");
const mongoose = require('mongoose');

//插入
exports.insert = (data) => {
    var post = new Post(data);
    post.save(function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    });
}

//根据id查询指定文章
exports.getPostById = async (objId) => {
    const raw = await Post.findById(objId);
    return raw;
}

//根据id修改文章
// exports.getPostById = (id) => {
//     const raw = await Post.updateOne({_id: id});
//     console.log(raw);
// }

// //删除对应id的文章
// exports.delPostById = (id) => {
//     const raw = await Post.deleteOne(id);
//     console(raw);
// }



// exports.getPostsByCat = (cat) => {
//     const raw = await Post.find
// }



// //查询并更新
// function update(wherestr, updatestr){
//     Post.update(wherestr, updatestr, function(err, res){
//         if (err) {
//             console.log("Error:" + err);
//         }
//         else {
//             console.log("Res:" + res);
//         }
//     })
// }

// var User = require("./user.js");

// // 根据id进行更新
// function findByIdAndUpdate(id, updatestr){
//     var id = '56f2558b2dd74855a345edb2';
//     var updatestr = {'userpwd': 'abcd'};

//     Post.findByIdAndUpdate(id, updatestr, function(err, res){
//         if (err) {
//             console.log("Error:" + err);
//         }
//         else {
//             console.log("Res:" + res);
//         }
//     })
// }

// //删除
// function del(){
//     var wherestr = {'username' : 'Tracy McGrady'};

//     User.remove(wherestr, function(err, res){
//         if (err) {
//             console.log("Error:" + err);
//         }
//         else {
//             console.log("Res:" + res);
//         }
//     })
// }


// //根据id删除


// //条件查询
// var User = require("./user.js");

// function getByConditions(){
//     var wherestr = {'username' : 'Tracy McGrady'};

//     User.find(wherestr, function(err, res){
//         if (err) {
//             console.log("Error:" + err);
//         }
//         else {
//             console.log("Res:" + res);
//         }
//     })
// }

// let data = {
//     title: "sssss",
//     author: "ssss",
//     content: "xxxxxx",
//     category: [{ name: "xxx"}, {name: "yyy"}],
//     tagList: [{ name: "zzz"}, {name: "ooo"}],
//     likedCount: 100,
//     comment: [{ index: 10, index: 100}],
//     createTime: new Date()
// };


