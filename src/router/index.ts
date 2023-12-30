import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import DashboardViewVue from '@/views/DashboardView.vue'
import IndexViewVue from '@/views/IndexView.vue'
import LundyStoreViewVue from '@/views/dashboardChild/LundyStoreView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: IndexViewVue
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardViewVue
    },
    {
      path: '/dashboard/:storeId',
      name: 'laundryStore',
      component: LundyStoreViewVue
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: DashboardViewVue }
  ]
})

export default router
