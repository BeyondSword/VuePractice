var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

//三篇测试posts
var postsArr =  [
    {
        title: 'POST-A',
        content: 'ssdasxzcvzvdaffadwqewrrqeqrrqafd',
        category: ['cat-a', 'cat-b'],
        tagList: ['tag-c'],
        likeCount: 0,
        comment: [1,2,3], // comment_id
        createBy: 'Andy',
        createTime: '2022-01-03',
    },
    {
        title: 'POST-B',
        content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        category: ['cat-a'],
        tagList: ['tag-a', 'tag-b'],
        likeCount: 100,
        comment: [4,5,6], // comment_id
        createBy: 'Andy',
        createTime: '2022-01-03',
    },
    {
        title: 'POST-C',
        content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        category: ['cat-b'],
        tagList: ['tag-b', 'tag-c'],
        likeCount: 100,
        comment: [7,8], // comment_id
        createBy: 'Andy',
        createTime: '2022-01-03',
    }
];

//insert
function testInsertMany() {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("webBlog");
        //insertMany 创建数据
        dbo.collection("posts").insertMany(postsArr, function(err, res) {
            if (err) throw err;
            console.log("插入的文档数量为: " + res.insertedCount);
            db.close();
        });
    });
};

//通过标签查找文章 tag:string  返回Array
function findPostByTag(tag) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("webBlog");
        var query = {tagList: tag};
        return dbo.collection("posts").find(query).toArray(function(err, result) {
            if (err) throw err;
            // console.log(result);
            db.close();
            return result;
        });
    });
}

//通过分类查找文章
function findPostByCategory(cat) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("webBlog");
        var query = {category: cat};
        var res = dbo.collection("posts").find(query).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
            // return result;
        });
        console.log(res);
    });
}



async function dataOperate() {
    var conn = null;
    try {
        conn = await MongoClient.connect(url);
        console.log("数据库已连接");
        const test = conn.db("testdb").collection("test");
        // 增加
        await test.insertOne({ "site": "runoob.com" });
        // 查询
        var arr = await test.find().toArray();
        console.log(arr);
        // 更改
        await test.updateMany({ "site": "runoob.com" },
            { $set: { "site": "example.com" } });
        // 查询
        arr = await test.find().toArray();
        console.log(arr);
        // 删除
        await test.deleteMany({ "site": "example.com" });
        // 查询
        arr = await test.find().toArray();
        console.log(arr);
    } catch (err) {
        console.log("错误：" + err.message);
    } finally {
        if (conn != null) conn.close();
    }
}

// testInsertMany();
// console.log(findPostByTag('tag-a'));
// console.log(findPostByTag('tag-b'));
// console.log(findPostByTag('tag-c'));
console.log(findPostByCategory('cat-a'));