import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import index from '@/components/index'
const home = () => import('@/components/home')
const userlist = () => import('@/components/userlist')
const adduser = () => import('@/components/adduser')
const pwdedit = () => import('@/components/pwdedit')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/',
          name: 'home',
          component: home
        },
        {
          path: '/home',
          name: 'home',
          component: home
        },
        {
          path: '/userlist',
          name: 'userlist',
          component: userlist
        },
        {
          path: '/adduser',
          name: 'adduser',
          component: adduser
        },
        {
          path: '/pwdedit',
          name: 'pwdedit',
          component: pwdedit
        }
      ]
    }
  ]
})
