import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // 设置代理
    proxy: {
      // 将 /api 替换为您想要代理的请求路径
      '/api': {
        // 指定目标地址
        target: 'http://localhost:3000/graphql',
        // 修改请求头中的 Origin 字段，以实现跨域请求
        changeOrigin: true,
        // 重写请求路径，去掉开头的 /api
        rewrite: (path) => path.replace(/^\/api/, '') // 不可以省略rewrite
      }
    }
  },
  plugins: [
    react(),
    eslint(),
  ],
})
