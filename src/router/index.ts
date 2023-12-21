import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import DashboardViewVue from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: DashboardViewVue
    }
  ]
})

export default router
