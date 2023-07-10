import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: '',
          name: 'shakes',
          component: () => import('../views/Shakes.vue')
        },
        {
          path: '/coffee',
          name: 'coffee',
          component: () => import('../views/Coffee.vue')
        },
        {
          path: '/mocktail',
          name: 'mocktail',
          component: () => import('../views/Mocktail.vue')
        },
        {
          path: '/cocktail',
          name: 'cocktail',
          component: () => import('../views/Cocktail.vue')
        },
      ]
    },
  ]
})

export default router
