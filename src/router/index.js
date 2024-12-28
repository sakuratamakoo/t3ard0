import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //HOME
    {
      path:'/',
      name:'home',
      component: () => {
        return import('../views/home.vue');
      },
      meta: { requiresAuth: false }
    }
  ]
})
export default router
