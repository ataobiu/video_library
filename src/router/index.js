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
        component: () => import('../views/AboutView.vue')
      },
      {
        path: '/tv',
        name: 'tv',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: '/animation',
        name: 'animation',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: '/variety',
        name: 'variety',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: '/jlp',
        name: 'jlp',
        component: () => import('../views/AboutView.vue')
      },
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
