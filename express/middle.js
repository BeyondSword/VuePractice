const model = require('./model.js');

//根据 ID 查找文章
// exports.article = async (req, res) => {
//     let objId = req.param('id');
//     if (id) {
//         console.log("objId:", objId);
//         let foo = await model.getPostById(objId);
//         res.json({result:foo});
//     }
// }

//根据 title 查找文章
exports.article = async (req, res) => {
    let title = req.param('title');
    if (title) {
        let raw = await model.getPostByTitle(title);
        res.json({result:raw, code:200});
    }
    //404 not found
}

//根据标签查文章列表
exports.articlesByTag = async (req, res) => {
    let tag = req.param('tag');
    let pageNo = req.param('pageNo');
    let pageSize = req.param('pageSize');
    if (tag) {
        let raw = await model.getPostsByTag(tag, pageNo, pageSize);
        res.json({result:raw, code:200});
    }
}

//根据分类查文章列表
exports.articlesByCat = async (req, res) => {
    let cat = req.param('cat');
    let pageNo = req.param('pageNo');
    let pageSize = req.param('pageSize');
    if (cat) {
        let raw = await model.getPostsByCat(cat, pageNo, pageSize);
        res.json({
                result:raw,
                code: 200
                });
    }
}

//文章列表按时间排序
exports.articles = async (req, res) => {
    let pageNo = req.param('pageNo');
    let pageSize = req.param('pageSize');
    let raw = await model.getPostsAll(pageNo, pageSize);
    res.json({result:raw, code:200});
}

//获取所有category
exports.categories = async (req, res) => {
    let raw = await model.getCategories();
    // raw.map((cat) => {
    //     cat.articleCount = cat.lists.length;
    // })
    console.log(raw);
    res.json({result:raw, code:200});
}

//获取所有tags
exports.tags = async (req, res) => {
    let raw = await model.getTags();
    res.json({result:raw, code:200});
}

