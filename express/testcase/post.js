//分类单个， 标签允许多个

//category
//需要有的信息
//name
//size => 分类下的 article 数量
//文章列表

//添加
//1.新建某个category。 => 插入

//查
//1. 根据给定 category_name 查找包含的articles， 返回一个articles的列表。
//2. 列出所有已经存在的categories。

//comment 和 post 是强绑定的， 所以可以直接存在 posts 中。

//先解决查问题， 数据预先设置。

// cate表简化， 只存文章名

let categories =[
{
  name: "cat-a",
  articles: [{name: "t1"}, {"t2"}, "t3"]
},
{
  name: "cat-b",
  articles: ["t4", "t5"]
},
{
  name: "cat-c",
  articles: ["t6", "t7"]
},
{
  name: "cat-d",
  articles: []
},
{
  name: "cat-e",
  articles: ["t8, t9"]
}
];

//tag直接查全表解决，因为与文章多对多，更新会比较麻烦


let single =
{
  title: 't1',
  content: '随便写点什么',
  category: 'cat-a',
  tagList: [ 'tag-b', 'tag-c' ],
  likedCount: 100,
  comment: [{
    author: 'aa',
    content: 'bbb',
    likedCount: 1000
  },
  {
    author: "bb小子",
    content: 'ssxf',
    likedCount: 394
  }]
};
