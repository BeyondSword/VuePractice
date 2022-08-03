//根据 ID 查找文章
exports.article = (req, res) => {
    let id = req.param('id');
    if (id < 0) {
        // 错误处理404 找不到
    }
    res.json(queryById(id));
}

//根据 ID 找评论
exports.comments = (req, res) => {
    res.json(getComments(id));
}

//根据 category 找文章列表
exports.listByCat = (req, res) => {
    let pageSize = req.param('pageSize');
    let pageNo = req.param('pageNo');
    res.json(getListByCat());
}

//根据 tag 找文章列表
exports.listByTag = (req, res) => {
    let pageSize = req.param('pageSize');
    let pageNo = req.param('pageNo');
    res.json(getListByTag);
}

//列出所有文章列表
exports.listAll = (req, res) => {
    let pageSize = req.param('pageSize');
    let pageNo = req.param('pageNo');
    res.json(getListAll);
}

//列出文章详情
exports.listDetail = (req, res) => {
    let pageSize = req.param('pageSize');
    let pageNo = req.param('pageNo');
    res.json(getListDetail);
}

//获取所有category
exports.categories = (req, res) => {
    res.json(getCategories);
}

//获取所有tags
exports.tags = () => {
    res.json(getTags);
}

