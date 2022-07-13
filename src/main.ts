import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import timeFormatter from '@/util/timeFormatter'
const app = createApp(App)

// 自定义指令(全局指令)
app.directive('focus', {
    // 当被绑定的元素挂载到 DOM 中时……
    mounted(el:HTMLElement) {
      // 聚焦元素
      el.focus()
    }
})
timeFormatter(app)
app.use(ElementPlus).use(store).use(router).mount('#app')


