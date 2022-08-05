// import Mock from 'mockjs';

//schemaes
let Post = require("./schema/post");
let Category = require("./schema/category")
let Tag = require("./schema/tag")

const db = require("./db.js");
const mongoose = require('mongoose');

exports.removeAll = async () => {
    console.log("deleting...");
    await Post.deleteMany();
    await Category.deleteMany();
    await Tag.deleteMany();
    console.log(await Tag.count());
}

//插入文章
exports.insertPost = (data) => {
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

//插入类别
exports.insertCategory = (data) => {
    var cat = new Category(data);
    cat.save(function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    });
}

//插入标签
exports.insertTag = (data) => {
    var tag = new Tag(data);
    tag.save(function (err, res) {
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

//根据name查询文章
exports.getPostByTitle = async (name) => {
    const raw = await Post.findOne({title:name});
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

// 根据tag查询文章列表,显示缩略结果
exports.getPostsByTag = async (tag, pageNo, pageSize) => {
    const query = await Post.find(
        {
            tagList: { $elemMatch: {name:tag}}
        },
        {
            content: 0, comment: 0, tagList:{_id: 0}
        },
        {
            skip: (pageNo-1)*pageSize, limit: pageSize
        }
    ).exec();

    return query;
}

// 根据category查询文章列表,显示缩略结果
exports.getPostsByCat = async (cat, pageNo, pageSize) => {
    const query = await Post.find(
        {
            category: cat
        },
        {
            content: 0, comment: 0, tagList:{_id: 0}
        },
        {
            skip: (pageNo-1)*pageSize, limit: pageSize
        }
    ).exec();

    return query;
}

// 全表查询
exports.getPostsAll = async (pageNo, pageSize) => {
    const query = await Post.find(
        null,
        {
            content: 0, comment: 0, tagList:{_id: 0}
        },
        {
            skip: (pageNo-1)*pageSize, limit: pageSize
        }
    ).exec();

    return query;
}


exports.getCategories = async (pageNo, pageSize) => {
    const query = await Category.find().exec();
    return query;
}

exports.getTags = async(pageNo, pageSize) => {
    const query = await Tag.find().exec();
    return query;
}