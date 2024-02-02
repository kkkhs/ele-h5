import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import components from 'unplugin-vue-components/vite'
// import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx()
    // components({
    //   resolvers: [VantResolver()]
    // })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  //vite配置proxy
  server: {
    port: 3000,
    proxy: {
      '/api': 'http://121.40.200.148:8000/',
      '/imgs': 'http://121.40.200.148:8000/',
    }
  }
})

//打包配置文件
module.exports = {
  assetsDir: 'static',
  parallel: false,
  publicPath: './',
};