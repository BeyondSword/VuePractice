let express = require('express');   //引入express
let Mock = require('mockjs');       //引入mock

let app = express();        //实例化express

// 处理跨域问题
prepare = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, accessToken, token, x-access-token",);
}

app.use('/blog/article/pageListWithTags',function(req, res) {
    prepare(req, res);
    res.json(Mock.mock({
        'code': 200,
        'result': {
            'records|5':[{
                'key|+1': 1,
                'title|1':['肆无忌惮', '称王称霸', '那个男人'],
                // 'content|1': ['这是博客内容', 'this is blog content', '疑信参半 却无比期盼', '你的惯犯 圆满', '别让纠缠 显得 孤单'],
                'intro|1': ['下载', '试听', '喜欢'],
                'viewCount|1-10000': 10000,
                'likeCount|1-10000': 10000,
                'commentCount|1-10000': 10000
            }],
            'total': 5,
        },
    }))
});


app.use('/blog/category/list',function(req, res) {
    prepare(req, res);
    res.json(Mock.mock({
        'code': 200,
        'result':[{
                "id|+1": 0,
                'name': "@cword(3,5)",
                'articleCount': "",
                'articleList|3': [{
                    'title': '@word',
                    'createTime':'@date'
                }]
        }]
    }))
});

app.use('/blog/category/pageList',function(req, res) {
    prepare(req, res);
    res.json(Mock.mock({
        'code': 200,
        'result':{
            'records|3': [{"id|+1": 0, 'name': "@cword(3,5)"}]
        }
    }))
});

app.use('/blog/tag/pageList',function(req, res) {
    prepare(req, res);
    res.json(Mock.mock({
        'code': 200,
        'result':{
            'records|3': [{"id|+1": 0, 'name': "@cword(1,2)"}]
        }
    }))
});

app.use('/blog/article/list',function(req, res) {
    prepare(req, res);
    res.json(Mock.mock({
        'status': 200,
        'dataSource|1-9':[{
            'key|+1': 1,
            'title|1':['肆无忌惮', '称王称霸', '那个男人'],
            'content|1': ['这是博客内容', 'this is blog content', '疑信参半 却无比期盼', '你的惯犯 圆满', '别让纠缠 显得 孤单'],
            'mockAction|1': ['下载', '试听', '喜欢']
        }]
    }))
});

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
