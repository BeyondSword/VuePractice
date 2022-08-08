import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
// 支持全局自动引入
export default defineConfig({
  plugins: [vue(),
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
        },
      ],
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    })],
  resolve: {
    alias: {
        "@": path.resolve(__dirname, "src"),
        "coms": path.resolve(__dirname, "src/components"),
    },
  },
  //服务器的端口监听端口配置和host设置
  server: {
    host: "localhost",
    port: 3000,
    https: false
  },
  //引入 node env
  define: {
    'process.env': {}
  }
})
