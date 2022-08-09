<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <transition :name="route.meta.transition">
        <component :is="Component" v-if="route.meta.keepAlive" />
      </transition>
    </keep-alive>
    <transition :name="route.meta.transition">
      <component :is="Component" v-if="!route.meta.keepAlive" />
    </transition>
  </router-view>
</template>

<!-- router-view实现两次重定向 -->
<script>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "App",
  components: {},
  setup() {
    const route = useRoute();

    onMounted(() => {
    //   document.getElementById("app").style.display = "block";
    //   document.getElementById("loading_container").style.display = "none";
    });

    return {
      route,
    };
  },
};
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease 0s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-leave-from,
.fade-enter-to {
  opacity: 1;
}
</style>
