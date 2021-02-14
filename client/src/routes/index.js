import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Admin from '@/components/Admin'

Vue.use(Router)

const routes = [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/admin',
      component: Admin
    }
  ]

  const router = new Router({
      scrollBehavior () {
        return { x: 0, y: 0 }
      },
      routes,
      mode: 'history',
      default: '/'
    })
    
    export default router