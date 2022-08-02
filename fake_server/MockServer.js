let express = require('express');   //引入express
let Mock = require('mockjs');       //引入mock

let app = express();        //实例化express
let path1 = '/blog/article/pageListWithTags' //修改后缀符合要求
let path2 = '/blog/article/list'
let path3 = '/blog/article/queryById'

function addHead(res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, accessToken, token, x-access-token",);
}
app.use('/',function(req, res) {
    addHead(res);
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

app.use(path1,function(req, res) {
    addHead(res);
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

app.use(path2,function(req, res) {
    addHead(res);
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

app.use(path3,function(req, res) {
    addHead(res);
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

app.listen('8090', () => {
    console.log('http://localhost:8090' + path1)
    console.log('http://localhost:8090' + path2)
    console.log('http://localhost:8090' + path3)
})
