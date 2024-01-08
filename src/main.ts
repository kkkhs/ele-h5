// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vant/lib/index.css'
import '@/style/index.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 实现不同设备的适配
const width = document.documentElement.clientWidth
const ratio = width / 390 // 做项目时的设备宽度
const fontSize = 100 * ratio
document.getElementsByTagName('html')[0].style.fontSize = `${fontSize}px`

app.mount('#app')
