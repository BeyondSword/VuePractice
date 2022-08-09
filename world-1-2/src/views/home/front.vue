<template>
  <div class="recent-post-item article-container">
    <!-- <a class="article-title" href="/learn-vite/">{{post.title}}</a> -->
    <div class="article-title" @click="handleGoArticle(post)">{{post.title}}</div>
    <div class="article-info">
      <time style="margin:0.5rem; color:blue;"><calendar-two-tone two-tone-color="blue"/>
        <span style="margin-left:0.1rem">{{post.createTime}}</span>
      </time>
      <span style="margin:0.5rem"><eye-outlined/>
        <span style="margin-left:0.1rem">{{post.viewCount}}</span>
      </span>
      <span style="margin:0.5rem"><edit-two-tone two-tone-color="red"/>
        <span style="margin-left:0.1rem">{{post.commentCount}}</span>
      </span>
    </div>
    <div class="article-content">
        已经好久没有写博客了。本文不说 Vue3.0 了，相信已经有很多文章在说它了。而前一段时间尤大开源的vite则是一个更加吸引我的东西，
        它的总体思路是很不错的，早期源码的学习成本也比较低，于是就趁着假期学习一番。
    </div>
    <div class="article-button">
      <a-button type="primary" @click="handleGoArticle(post)">Primary Button</a-button>
    </div>
  </div>
</template>

<script>
import { getAction } from "@/request/manage";
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import {
    LikeOutlined,
    EyeOutlined,
    MessageOutlined,
    CalendarOutlined,
    CalendarTwoTone,
    EditTwoTone
} from "@ant-design/icons-vue";

export default defineComponent({
  components: {
    EyeOutlined,
    CalendarOutlined,
    CalendarTwoTone,
    EditTwoTone
  },
  // props: {
  //   post: Object;
  // }
  props: ['post'],//post 带有文章内容
  setup(props) {
    console.log("post:", props.post);
    // 等价于<router-link :to="...">
    const router = useRouter();
    const handleGoArticle = (item) => {
      router.push({ path: "/article", query: { id: item.title } });
    };

    return {
      // ...toRefs(state),
      handleGoArticle, //与元素绑定的方法一定要导出！
    };
  }
});
</script>
<style>
    .article-container{
      margin: 8rem 0 2rem;
    }
    /* /font-family: Lato,Helvetica Neue For Number,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif; */
    .article-title{
        line-height: 1;
        box-sizing: border-box;
        background-color: transparent;
        display: block;
        margin-bottom: .3rem;
        border-bottom: 1px solid rgb(238, 238, 238);
        color: #2e2e2e;
        text-decoration: none;
        font-size: 2.5rem;
        cursor: pointer;
        transition: all .2s ease-in-out;
        text-align: center;
    }
    .article-info{
      text-align: center;
      font-size: small;
    }
    .article-content{
      margin-top: 1.2rem;
      margin-bottom: 0.5rem;
      line-height: 2;
    }
    .article-button{
      margin-top: 0.6rem;
      text-align: center;
    }
</style>

 <!-- <template>
  <a-list item-layout="horizontal" :data-source="data">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        >
          <template #title>
            <a href="https://www.antdv.com/">{{ item.title }}</a>
          </template>
          <template #avatar>
            <a-avatar src="https://joeschmoe.io/api/v1/random" />
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
interface DataItem {
  title: string;
}
const data: DataItem[] = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
export default defineComponent({
  setup() {
    return {
      data,
    };
  },
});
</script> -->


