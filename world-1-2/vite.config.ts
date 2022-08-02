import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
