import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';

// createApp(App).mount('#app')
// new Vue({
//     render: (h) => h(App),
//     router, // 使用路由
//   }).$mount('#app');
// const app = createApp(App)

// app.use(router)

// app.mount('#app')
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')