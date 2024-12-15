import {createRouter,createWebHashHistory} from 'vue-router'
// import Vue from 'vue'
// import VueRouter from 'vue-router'
import main from '../views/MainPage/MainPage.vue'
import login from '../components/Login/Login.vue'
 
// Vue.use(VueRouter)// 注册路由插件 
// // 配置表

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/main',
    name: 'main',
    component: main
  }
]
 
// const router = new VueRouter({
//   routes
// })`z
 
// export default router 
// const routerHistory = createWebHistory()
 
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router; 
