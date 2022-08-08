
<template>
  <a-layout>
    <!-- <a-layout-sider><Sider/></a-layout-sider> -->
    <a-layout-sider><Sider/></a-layout-sider>
    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout-content>
        <router-view/>
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import {
  defineComponent,
  reactive,
  toRefs,
  watch,
  computed,
  onMounted,
} from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import {
  ArrowUpOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@ant-design/icons-vue";
import Sider from "./sider.vue";
import Panel from "./panel.vue";
import Breadcrumb from "./breadcrumb.vue";

export default defineComponent({
  components: {
    ArrowUpOutlined,
    MenuOutlined,
    SearchOutlined,
    Sider,
    Panel,
    Breadcrumb,
  },

  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const menuList = router.getRoutes().filter((item) => item.meta.isMenu);
    const state = reactive({
      menuList,
      breadcrumbList: [],
      selectedKey: "/home",
      isSideShow: false,
      searchValue: "",
      curNavTitle: "",
    });

    const isSearchBoxShow = computed(() => store.state.search.isSearchBoxShow);

    onMounted(() => {
      initBreadcrumbList();
    });

    //控制面包屑导航
    watch(
      () => route.path,
      () => {
        // initBreadcrumbList();
      }
    );

    const initBreadcrumbList = () => {
      //监听路由变化，渲染面包屑导航
      const breadcrumbList = router
        .getRoutes()
        .filter((item) => item.meta.isBreadcrumb)
        .filter((item) => item.path == route.path);

      //面包屑导航过滤
      if (breadcrumbList[0].path !== "/home") {
        breadcrumbList.unshift(menuList.find((item) => item.path == "/home"));
      }
      if (route.path !== "/search") {
        store.dispatch("setIsSearchBoxShow", false);
      }
      state.selectedKey = route.path;
      state.breadcrumbList = breadcrumbList;
      state.curNavTitle = route.meta.title;
    };

    const handleMenuClick = (param) => {
      state.selectedKey = param.path;
      router.push({ path: param.path });
    };

    //mobile 显示搜索框
    const handleSearchBoxShow = () => {
      store.dispatch("setIsSearchBoxShow", true);
      state.searchValue = "";
      router.push({ path: "/search" });
    };

    //mobile 隐藏搜索框
    const handleSearchBoxHide = () => {
      store.dispatch("setIsSearchBoxShow", false);
      state.searchValue = "";
      router.go(-1);
    };

    const handleSearchChange = (e) => {
      const searchValue = e.target.value;
      state.searchValue = searchValue;
      if (!searchValue && route.path == "/search") {
        router.go(-1);
      }
    };

    //导航搜索框确认搜索
    const handleSearchConfirm = () => {
      if (route.path == "/search") {
        router.replace({
          path: "/search",
          query: { searchKey: state.searchValue },
        });
      } else {
        router.push({
          path: "/search",
          query: { searchKey: state.searchValue },
        });
      }
    };

    return {
      ...toRefs(state),
      isSearchBoxShow,
      handleMenuClick,
      handleSearchBoxShow,
      handleSearchBoxHide,
      handleSearchChange,
      handleSearchConfirm,
    };
  },
});
</script>

<style>
#components-layout-demo-basic .code-box-demo {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  color: #fff;
  background: #7dbcea;
}
[data-theme='dark'] #components-layout-demo-basic .ant-layout-header {
  background: #6aa0c7;
}
[data-theme='dark'] #components-layout-demo-basic .ant-layout-footer {
  background: #6aa0c7;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  color: #fff;
  line-height: 120px;
  background: #3ba0e9;
}
[data-theme='dark'] #components-layout-demo-basic .ant-layout-sider {
  background: #3499ec;
}
#components-layout-demo-basic .ant-layout-content {
  min-height: 120px;
  color: #fff;
  line-height: 120px;
  background: rgba(16, 142, 233, 1);
}
[data-theme='dark'] #components-layout-demo-basic .ant-layout-content {
  background: #107bcb;
}
#components-layout-demo-basic > .code-box-demo > .ant-layout + .ant-layout {
  margin-top: 48px;
}
</style>