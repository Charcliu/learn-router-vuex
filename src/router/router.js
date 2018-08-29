import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import HelloWorld from '../components/HelloWorld.vue'
import User from '../components/User.vue'
import Nest from '../components/Nest.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
      // 命名视图
      // components: {
      //   default: Home,
      //   header: () => import('../components/View/Header.vue'),
      //   main: () => import('../components/View/Main.vue'),
      //   footer: () => import('../components/View/Footer.vue')
      // }
    },
    {
      path: '/about',
      name: 'about',
      component: About
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/helloWorld',
      name: 'helloWorld',
      component: HelloWorld
    },
    // 动态路由
    {
      // 动态路径参数 以冒号开头 像 /user/foo 和 /user/bar 都将映射到相同的路由
      path: '/user/:id',
      name: 'user',
      component: User
    },
    // 嵌套路由
    {
      path: '/nest',
      name: 'nest',
      component: Nest,
      children: [
        {
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'pageA',
          component: () => import('../components/nest/PageA.vue')
        },
        {
          path: 'pageB',
          component: () => import('../components/nest/PageB.vue')
        }
      ]
    },
    // 嵌套命名视图
    {
      path: '/index',
      name: 'index',
      component: () => import('../components/Index.vue'),
      children: [
        {
          path: 'all',
          components: {
            // default: Home,
            header: () => import('../components/View/Header.vue'),
            main: () => import('../components/View/Main.vue'),
            footer: () => import('../components/View/Footer.vue')
          }
        }
      ]
    }
  ]
})
