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
	<div class="box box-23">
		<div class="box-item grow">1 <div>flex-grow: 1</div></div>
		<div class="box-item grow grow-2">
        <a-typography-text
        :style="ellipsis ? { width: '100px' } : {}"
        :ellipsis="ellipsis ? { tooltip: 'I am ellipsis now!' } : false"
        content="Ant Design, a design language for background applications, is refined by Ant UED Team."
        />
    </div>
		<div class="box-item grow">3 <div>flex-grow: 1</div></div>
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
} from "@ant-design/icons-vue";

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

<style>
.box {
	background-color: white;
	margin: 0 0 55px;
	display: flex;

}
.box-23 .box-item{
	flex-grow: 1;
	width: auto;
}
.box-23	.grow-2 {
	flex-grow: 2;
}
</style>

