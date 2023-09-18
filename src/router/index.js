import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/movie',
        name: 'movie',
        component: () => import('../views/MorePage.vue')
      },
      {
        path: '/tv',
        name: 'tv',
        component: () => import('../views/MorePage.vue')
      },
      {
        path: '/animation',
        name: 'animation',
        component: () => import('../views/MorePage.vue')
      },
      {
        path: '/variety',
        name: 'variety',
        component: () => import('../views/MorePage.vue')
      },
      {
        path: '/jlp',
        name: 'jlp',
        component: () => import('../views/MorePage.vue')
      },
      {
        path: '/',
        name: 'hotpage',
        component: () => import('../views/HotPage.vue')
      },
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
