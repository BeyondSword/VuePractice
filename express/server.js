/**
 * 路由注册及服务器入口
 */
const express = require('express');
const middle = require('./middle')

let app = express();
//跨域处理
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, accessToken, token, x-access-token",);
})

app.get('/blog/article/queryById', middle.article);
app.get('/blog/article/pageListWithDetails', middle.listDetail);
app.get('/blog/article/list', middle.listAll);
app.get('/blog/category/pageList', middle.listByCat)
app.get('/blog/tag/pageList', middle.listByTag);

app.get('/blog/category/list', middle.categories);
app.get('/blog/tag/list', middle.tags);
app.get('/blog/comment/list', middle.comments);

// 监听
app.listen(8090, () => {
  console.log('Express started on port 3000');
});
