import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import ElementPlus from 'element-plus'
import {createPinia} from 'pinia'
import '@/assets/reset.css'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const pinia = createPinia()
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(router).use(pinia).use(ElementPlus).mount('#app')