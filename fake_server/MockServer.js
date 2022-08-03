let express = require('express');   //引入express
let Mock = require('mockjs');       //引入mock

let app = express();        //实例化express

// 处理跨域问题
prepare = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, accessToken, token, x-access-token",);
}

//按页查询文章  pageSize pageNo title status
app.use('/blog/article/pageListWithTags',function(req, res) {
    prepare(req, res);
    res.json(Mock.mock({
        'code': 200,
        'result': {
            'records|10':[{
                'key|+1': 1,
                'title':'@csentence',
                'intro|1': '@cparagraph',
                'viewCount|1-10000': 10000,
                'likeCount|1-10000': 10000,
                'commentCount|1-10000': 10000
            }],
            'total': 5,
        },
    }))
});

//获取分类 参数无
app.use('/blog/category/list',function(req, res) {
    prepare(req, res);
    res.json(Mock.mock({
        'code': 200,
        'result|10':[{
                "id|+1": 0,
                'name': "@cword(3,5)",
                'articleCount|1-10': 10,
                'loading': true
        }]
    }))
});

//获取标签分类 参数无
app.use('/blog/tag/list',function(req, res) {
    prepare(req, res);
    res.json(Mock.mock({
        'code': 200,
        'result|10':[{
                "id|+1": 0,
                'name': "@cword(3,5)",
                'articleCount|1-10': 10,
        }]
    }))
});

//获取文章列表 参数 categoryId | 无参数获取所有文章
app.use('/blog/article/list',function(req, res) {
    prepare(req, res);
    res.json(Mock.mock({
        'code': 200,
        'result|1-10': [{
            'title': '@csentence',
            'createTime':'@date'
        }]
    }))
});

//获取分类 pageNo:   pageSize:
app.use('/blog/category/pageList',function(req, res) {
    prepare(req, res);
    res.json(Mock.mock({
        'code': 200,
        'result':{
            'records|3': [{"id|+1": 0, 'name': "@cword(3,5)"}]
        }
    }))
});

//获取标签 pageNo:   PageSize:
app.use('/blog/tag/pageList',function(req, res) {
    prepare(req, res);
    res.json(Mock.mock({
        'code': 200,
        'result':{
            'records|3': [{"id|+1": 0, 'name': "@cword(1,2)"}]
        }
    }))
});

//获取文章内容  id:  userId:
app.use('/blog/article/queryById', function(req, res) {
    prepare(req, res);
    res.json(Mock.mock({
        'code': 200,
        'result': {
            'id|1-10': 10,
            'title|1': ['肆无忌惮', '称王称霸', '那个男人'],
            'content': '@cparagraph',
            'createBy': "@cname",
            'createTime': "@date",
            'categoryName': "@cword",
            'categoryId|1-10': 10,
            'likeCount|1-10000': 10000,
            'isLiked': 0,
            'tagList|3': [{"id|+1": 0, 'name': "@cword(1,5)"}]
        }
    }))
});

//获取评论列表  articleId
app.use('/blog/comment/list', function(req, res) {
    prepare(req, res);
    res.json(Mock.mock({
        'code': 200,
        'result|10': [{
            'id|+1': 1,
            'content': '@csentence',
            'createBy': "@cname",
            'createTime': "@date",
        }]
    }))
});

app.listen('8090', () => {
    console.log('http://localhost:8090');
})
