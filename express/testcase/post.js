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

// comment多的话要考虑分页，所以可能分开加载更合适。

// 原始测试数据
let posts = [
    {
      title: '这是标题一',
      author: 'xxx',
      content: '随便写点什么',
      category: 'cat-a',
      tagList: [ {name: 'tag-b'}, {name: 'tag-c'} ],
      viewCount: 1000,
      likedCount: 101,
      createTime: new Date(),
      modifiedTime: new Date(),
      comment: [{
        author: 'aa',
        content: 'bbb',
        likedCount: 1000
      },
      {
        author: "bb小子",
        content: 'ssxf',
        likedCount: 394
      },
      {
        author: "好好好",
        content: 'xxsdf',
        likedCount: 203
      }]
    },
    {
        title: '这是标题二',
        author: '老王',
        content: '随便想点什么',
        category: 'cat-a',
        tagList: [ {name: 'tag-e'}, {name: 'tag-c'} ],
        viewCount: 1000,
        likedCount: 101,
        createTime: new Date(),
        modifiedTime: new Date(),
        comment: [{
          author: '小明',
          content: 'bbbbbb',
          likedCount: 400
        }]
    },
    {
        title: 't3',
        author: '老李',
        content: '随便说点什么',
        category: 'cat-b',
        tagList: [ {name: 'tag-a'}, {name: 'tag-c'}, {name: 'tag-d'} ],
        viewCount: 1000,
        likedCount: 101,
        createTime: new Date(),
        modifiedTime: new Date(),
        comment: []
    },
    {
        title: '不知道取什么名字',
        author: 'skdd',
        content: '随便做点什么',
        category: 'cat-b',
        tagList: [ {name: 'tag-b'}, {name: 'tag-d'} ],
        likedCount: 100,
        createTime: new Date(),
        modifiedTime: new Date(),
        comment: [{
          author: 'aa',
          content: '这里什么都没有',
          likedCount: 1000
        }]
    },
    {
        title: '不知道取什么名字x2',
        content: '随便做点什么',
        category: 'ccar',
        tagList: [ {name: 'tag-b'}, {name: 'tag-d'} ],
        viewCount: 1000,
        likedCount: 101,
        createTime: new Date(),
        modifiedTime: new Date(),
        comment: [{
          author: 'aa',
          content: '这里什么都没有',
          likedCount: 1000
        }]
    }
]

module.exports = posts;