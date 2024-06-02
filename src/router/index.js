import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/HomeView.vue'
import cuenta from '../views/CuentaView.vue'
import ordenes from '../views/OrdenesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      hpat: '/',
      name: 'home',
      component: home
    },
    {
      path: '/cuenta',
      name: 'cuenta',
      component: cuenta
    },
    {
      path: '/ordenes',
      name: 'ordenes',
      component: ordenes
    }
  ]
})

export default router
