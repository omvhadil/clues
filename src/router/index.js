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
          name: 'minuman-dingins',
          component: () => import('../views/MinumanDingin.vue')
        },
        {
          path: '/minuman-panas',
          name: 'minuman-panas',
          component: () => import('../views/MinumanPanas.vue')
        },
        {
          path: '/makanan-ringan',
          name: 'makanan-ringan',
          component: () => import('../views/MakananRingan.vue')
        },
        {
          path: '/makanan-berat',
          name: 'makanan-berat',
          component: () => import('../views/MakananBerat.vue')
        },
      ]
    },
  ]
})

export default router
