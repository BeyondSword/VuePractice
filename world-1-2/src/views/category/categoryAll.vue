<!-- TODO: bug: 合上唯一展开的一类时会报错, activeKey undefined -->
<template>
  <div class="page_content">
    <a-collapse ghost accordion :bordered="false" v-model:activeKey="activeKey">
      <a-collapse-panel
        v-for="(category, index) in categoryList"
        :key="index"
        :header="`${category.name}(${category.articleCount})`"
      >
        <template v-if="category.loading" #extra
          ><LoadingOutlined style="transition: all 0.3s; color: #555555"
        /></template>
        <div
          class="list_wrap"
          v-if="category.articleList && category.articleList.length"
        >
          <div class="list">
            <div
              class="item"
              v-for="(article, subIndex) in category.articleList"
              :key="subIndex"
            >
              <div class="title" @click="handleGoArticle(article)">
                {{ article.title }}
              </div>
              <div class="dot"></div>
              <div class="time">
                {{ moment(article.createTime).format("YYYY-MM-DD") }}
              </div>
            </div>
          </div>
        </div>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>
<script>
import { defineComponent, reactive, onMounted, toRefs, watch } from "vue";
import { getAction } from "@/request/manage";
import { useRouter } from "vue-router";
import moment from "moment";
import { LoadingOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    LoadingOutlined,
  },

  setup() {
    const router = useRouter();

    const state = reactive({
      activeKey: -1,
      categoryList: [],
    });

    onMounted(() => {
      getCategoryList();
    });

    //监听activeKey
    watch(
      () => state.activeKey,
      (val) => {
        console.log("val", val);
        //收起唯一一个列表时会导致 activeKey 返回 undefined.
        if (typeof val == 'undefined') {
          return;
        }
        const catName = state.categoryList[val]?.name;
        getArticleList(catName);
      }
    );

    //获取分类列表
    const getCategoryList = async () => {
      const res = await getAction("/blog/category/list", {});
      state.categoryList = res.result;
      console.log("state.categoryList", state.categoryList);
    };

    //获取文章列表
    const getArticleList = async (catName) => {
      // console.log(state.categoryList);
      const targetCategory = state.categoryList.find(
        (item) => item.name == catName
      );
      console.log("targetCategory", targetCategory);
      targetCategory.loading = true;
      const res = await getAction("/blog/category/pageList", {
        cat: catName,
        status: 1,
      });
      targetCategory.articleList = res.result;
      targetCategory.loading = false;
      console.log("targetCategory.articleList", targetCategory.articleList);
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
});
</script>
<style lang="less" scoped>
.page_content {
  padding: 20px 5%;
  .ant-collapse {
    background: none;
  }
  :deep(.ant-collapse-borderless) {
    background: none;
    .ant-collapse-item {
      border: none;
      .ant-collapse-header {
        font-weight: 600;
        color: #444444;
      }
      .ant-collapse-content > .ant-collapse-content-box {
        padding: 0 40px;
      }
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