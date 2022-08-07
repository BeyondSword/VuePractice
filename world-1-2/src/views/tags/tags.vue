<template>
  <div class="page_content">
    <div class="title_wrap">
      <div class="label">
        <tag-outlined style="font-size: 14px" />
      </div>
      <div class="value">{{ tagName }}</div>
      <div class="num">{{ total }}</div>
    </div>
    <div class="list_wrap">
      <div class="list">
        <div class="item" v-for="(item, index) in articleList" :key="index">
          <div class="title" @click="handleGoArticle(item)">
            {{ item.title }}
          </div>
          <div class="dot"></div>
          <div class="time">
            {{ moment(item.createTime).format("YYYY-MM-DD") }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs, watch } from "vue";
import { TagOutlined } from "@ant-design/icons-vue";
import { useRoute, useRouter } from "vue-router";
import { getAction } from "@/request/manage";
import moment from "moment";
export default {
  name: "tags",

  components: {
    TagOutlined,
  },

  setup() {
    const route = useRoute();
    const router = useRouter();

    const state = reactive({
      tagId: "",
      tagName: "",
      total: 0,
      articleList: [],
    });

    onMounted(() => {
      initPageData();
    });

    watch(
      () => route.query.tagId,
      () => {
        initPageData();
      }
    );

    const initPageData = () => {
      state.tagName = route.query.tagName;
      state.tagId = route.query.tagId;
      getArticleList();
    };

    //获取文章列表
    const getArticleList = async () => {
      console.log("tag:", state.tagName);
      const res = await getAction("/blog/tag/pageList", {
        pageSize: 10,
        pageNo: 1,
        tag: state.tagName,
        status: 1,
      });
      console.log(res.result);
      state.articleList = res.result;
      console.log(state.articleList);
      state.total = state.articleList.length;
    };

    const handleGoArticle = (item) => {
      router.push({ path: "/article", query: { id: item.title } });
    };

    return {
      ...toRefs(state),
      moment,
      handleGoArticle,
    };
  },
};
</script>

<style lang="less" scoped>
.page_content {
  padding: 10px 5%;
  .title_wrap {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    font-size: 13px;
    .label {
      margin-right: 6px;
    }
    .value {
      margin-right: 6px;
    }
    .num {
      color: #2e9dd2;
    }
  }
  .list_wrap {
    .list {
      .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        .title {
          transition: all 0.3s;
          font-size: 14px;
          cursor: pointer;
          color: #2e9dd2;
          &:hover {
            text-shadow: 0 0 10px rgba(46, 157, 210, 0.5);
          }
        }
        .dot {
          margin: 0 2%;
          flex-grow: 1;
          border-bottom: 1px dotted #dee2e6;
        }
        .time {
          font-size: 12px;
          color: #999999;
        }
      }
    }
  }
}
</style>
