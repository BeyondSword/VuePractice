//生成测试数据

const model = require('./model.js');
const posts = require('./testcase/post')

//根据 posts 生成所有 tags 并插入数据库
let genTags = (posts) => {
    let tags = [];
    let set = new Set(); // 去重
    posts.forEach(element => {
        element.tagList.forEach(ele => {
            set.add(ele.name);
        });
    });

    set.forEach(tagName => {
        let tag = {
            name: tagName,
            lists: []
        };

        posts.forEach(post => {
            if (post.tagList.some(ele => {
                return ele.name === tagName;
            })) {
                tag.lists.push({title: post.title});
            }
        })

        tags.push(tag);
    })

    // console.log('%j', tags);
    return tags;
}

//根据 posts 生成所有的 categories 并入库
let genCats = (posts) => {
    let cats = [];
    let set = new Set();
    posts.forEach(element => {
        set.add(element.category);
    });

    set.forEach(catName => {
        let cat = {
            name: catName,
            lists: []
        };

        posts.forEach(post => {
            if (post.category === catName) {
                cat.lists.push({title: post.title});
            }
        })

        cats.push(cat);
    })

    console.log('%j', cats);
    return cats;
}

const test_getPostByName = async () => {
    const raw = await model.getPostByTitle('t1');
    console.log(raw);
}

const test_getPostsByTag = async () => {
    const res = await model.getPostsByTag('tag-c');
    console.log(res);
}

const test_getPostsByCat = async () => {
    const res = await model.getPostsByCat('cat-a');
    console.log(res);
}

//测试插入
const testInsert = async () => {
    await model.removeAll();//删除所有表

    posts.map((post)=>{
        model.insertPost(post);
    });

    let tags = genTags(posts);
    tags.map(tag => {
        model.insertTag(tag);
    });

    let cats = genCats(posts);
    cats.map(cat => {
        model.insertCategory(cat);
    })
}

testInsert();

