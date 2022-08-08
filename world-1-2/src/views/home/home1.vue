<!-- <template>
  <div class="page_content">
    <a-spin size="large" :spinning="isLoading">
      <a-list
        item-layout="vertical"
        size="large"
        :pagination="
          pagination.total > pagination.pageSize ? pagination : false
        "
        :data-source="dataSource"
        :locale="{ emptyText: '暂无内容' }"
      >
        <template #renderItem="{ item }">
          <a-list-item key="item.title" @click="handleGoArticle(item)">
            <template #actions>
              <span>
                <EyeOutlined style="margin-right: 8px" />
                <span>{{ item.viewCount }}</span>
              </span>
              <span>
                <LikeOutlined style="margin-right: 8px" />
                <span>{{ item.likedCount }}</span>
              </span>
              <span>
                <MessageOutlined style="margin-right: 8px" />
                <span>{{ item.commentCount }}</span>
              </span>
            </template>
            <template v-if="item.cover" #extra>
              <img width="272" alt="logo" src="" />
            </template>
            <a-list-item-meta :description="item.createTime">
              <template #title>
                <a :href="item.href">{{ item.title }}</a>
              </template>
            </a-list-item-meta>
            {{ `${item.intro}..` }}
          </a-list-item>
        </template>
      </a-list>
    </a-spin>
  </div>
</template> -->
<template>
  <n-space justify="center">
    <n-button>这里放一个标题</n-button>
  </n-space>
</template>

<script>
import { getAction } from "@/request/manage";
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import {
  LikeOutlined,
  EyeOutlined,
  MessageOutlined,
} from "@ant-design/icons-vue";

// //==========组件样式调整===============
// import { SelectProps, ButtonProps } from 'naive-ui'

// type SelectThemeOverrides = NonNullable<SelectProps['themeOverrides']>
// type ButtonThemeOverrides = NonNullable<ButtonProps['themeOverrides']>

// const selectThemeOverrides: SelectThemeOverrides = {
//   menuBoxShadow:
//     '0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)',
//   peers: {
//     InternalSelection: {
//       textColor: '#FF0000',
//       heightMedium: '42px'
//     }
//   }
// }
// const buttonThemeOverrides: ButtonThemeOverrides = {
//   heightMedium: '40px',
//   textColor: 'rgba(24, 127, 231, 1)'
// }

// //====================================

export default defineComponent({
  name: "home",
  components: {
    LikeOutlined,
    EyeOutlined,
    MessageOutlined,
  },
  setup() {
    const router = useRouter();
    const state = reactive({
      isLoading: false,
      dataSource: [],
      searchKey: "",
      pagination: {
        onChange: (page) => {
          handlePageChange(page);
        },
        pageSize: 10,
        pageNo: 1,
        total: 0,
        showSizeChanger: false,
      },
    });

    onMounted(() => {
      getArticleList();
    });

    //获取文章列表
    const getArticleList = async () => {
      state.isLoading = true;
      const res = await getAction("/blog/article/list", {
        pageSize: state.pagination.pageSize,
        pageNo: state.pagination.pageNo,
        title: state.searchKey,
        status: 1,
      });

      console.log("res", res);
      state.dataSource = res.result;
      state.pagination.total = res.result.length;
      state.isLoading = false;
    };

    const handlePageChange = (page) => {
      state.pagination.pageNo = page;
      getArticleList();
    };

    // 等价于<router-link :to="...">
    const handleGoArticle = (item) => {
      router.push({ path: "/article", query: { id: item.title } });
    };

    return {
      ...toRefs(state),
      handleGoArticle,
    };
  },
});
</script>

<style lang="less" scoped>
.page_content {
  padding: 10px 5%;
  :deep(.ant-list-item) {
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background-color: rgba(206, 226, 246, 0.2);
      box-shadow: 0 0 15px rgba(206, 226, 246, 0.2);
    }
    .ant-list-item-meta-title > a {
      color: #2e9dd2;
    }
  }
  .ant-list-empty-text {
    padding: 40px 0;
  }
  .ant-list-pagination {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
