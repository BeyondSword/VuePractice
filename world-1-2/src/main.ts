// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// import './reset.less';
// import 'lib-flexible'
// import 'highlight.js/styles/monokai-sublime.css'
// import { setTwoToneColor } from "@ant-design/icons-vue";
// setTwoToneColor("#2e9dd2");

createApp(App)
    .use(router)
    .use(store)
    .use(Antd)
    .mount('#app')