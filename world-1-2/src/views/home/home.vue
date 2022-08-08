<template>
  <n-list bordered v-for="post in dataSource">
    <n-list-item>
    <n-space vertical size="large">
        <n-layout has-sider>
        <n-layout-sider content-style="padding: 24px;">
        </n-layout-sider>
        <n-layout>
                <n-space justify="center">
                    <n-text strong>
                        {{post.title}}
                    </n-text>
                </n-space>
                <n-space justify="center">
                    aa<n-divider vertical />bb<n-divider vertical />cc
                </n-space>
                <n-space justify="center">
                    选择了 mongodb 作为博客的后端数据库， 通过 mongoose 进行 CRUD。
                    试用了阿里云服务器(1个月)，配置 mongodb(尚未完成)。
                    原主要页面的前后端已经打通(数据库生成假数据)。
                    接下来的计划：
                    页面布局选型，在现有基础上进行改造和优化，进行ui框架选型（可能沿用ant-design-vue）。
                    博文的展示， markdown的渲染问题，以及数据库的存储方式。
                    实现用户登录功能（鉴权等）。
                    （登陆后）在线进行博客的编写。
                    服务器网站部署。
                </n-space>
        </n-layout>
        <n-layout-sider content-style="padding: 24px;">
        </n-layout-sider>
        </n-layout>
    </n-space>
    </n-list-item>
  </n-list>
</template>

<script>
import { getAction } from "@/request/manage";
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { GameControllerOutline, GameController } from '@vicons/ionicons5'

export default defineComponent({
  name: "home",
  components: {
    GameController,
    GameControllerOutline
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

<style scoped>
.n-text {
  font-size: 40px;
}
</style>