import Vue from 'vue'
import Router from 'vue-router'

const login = r => require.ensure([], () => r(require('../page/start/login')), 'login')
const errorPage_401 = r => require.ensure([], () => r(require('../page/start/401')), '401')
const errorPage_404 = r => require.ensure([], () => r(require('../page/start/404')), '401')
const home = r => require.ensure([], () => r(require('../page/start/home')), 'home')

Vue.use(Router)

export const constantRouterMap = [
    { path: '/login', component: login, hidden: true },
    { path: '/404', component: errorPage_404, hidden: true },
    { path: '/401', component: errorPage_401, hidden: true },
  {
    path: '/',
    component: home,
    redirect: '/home',
    name: '首页',
    hidden: true
  },
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
