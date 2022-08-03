// import Mock from 'mockjs';
let Post = require("./post.js");

let tags = ['tag0', 'tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6', 'tag7', 'tag8', 'tag9'];
let cats = ['cat0', 'cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6', 'cat7', 'cat8', 'cat9'];


//插入
function insert(data) {
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

//查询


//查询并更新
function update(wherestr, updatestr){
    Post.update(wherestr, updatestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

var User = require("./user.js");

// 根据id进行更新
function findByIdAndUpdate(id, updatestr){
    var id = '56f2558b2dd74855a345edb2';
    var updatestr = {'userpwd': 'abcd'};

    Post.findByIdAndUpdate(id, updatestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

//删除
function del(){
    var wherestr = {'username' : 'Tracy McGrady'};

    User.remove(wherestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}


//根据id删除


//条件查询
var User = require("./user.js");

function getByConditions(){
    var wherestr = {'username' : 'Tracy McGrady'};

    User.find(wherestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

let data = {
    title: "sssss",
    author: "ssss",
    content: "xxxxxx",
    category: [{ name: "xxx"}, {name: "yyy"}],
    tagList: [{ name: "zzz"}, {name: "ooo"}],
    likedCount: 100,
    comment: [{ index: 10, index: 100}],
    createTime: new Date()
};
insert(data);

