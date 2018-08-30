import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import HelloWorld from '../components/HelloWorld.vue'
import User from '../components/User.vue'
import Nest from '../components/Nest.vue'

Vue.use(Router)

const router = new Router({
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
      component: About,
      beforeEnter: (to, from, next) => {
        console.log('路由独享守卫', to, from, next)
        next()
      },
      // 路由元信息,通过组件内route对象可以获取到
      meta: {
        requiresAuth: true
      }
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
    },
    // 重定向
    { path: '/n', redirect: '/nest' },
    // 通过props解耦
    {
      path: '/routerParam/:id',
      name: 'routerParam',
      component: () => import('../components/RouterParam.vue'),
      props: true
    },
    {
      path: '/vuexA',
      name: 'vuexA',
      component: () => import('../components/vuex/vuexA.vue')
    },
    {
      path: '/vuexB',
      name: 'vuexB',
      component: () => import('../components/vuex/vuexB.vue')
    },
    {
      path: '/vuexC',
      name: 'vuexC',
      component: () => import('../components/vuex/vuexC.vue')
    },
    {
      path: '/vuexD',
      name: 'vuexD',
      component: () => import('../components/vuex/vuexD.vue')
    },
    {
      path: '/vuexE',
      name: 'vuexE',
      component: () => import('../components/vuex/vuexE.vue')
    }
  ],
  // 滚动行为
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return {
      x: 0,
      y: 0
    }
  }
})

router.beforeEach((to, from, next) => {
  console.log('全局守卫', to, from, next)
  next()
})

router.afterEach((to, from) => {
  console.log('全局后置守卫', to, from)
})

export { router }
