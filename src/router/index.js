import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/LoginView.vue'
import cuenta from '../views/CuentaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      hpat: '/',
      name: 'home',
      component: login
    },
    {
      path: '/cuenta',
      name: 'cuenta',
      component: cuenta
    }
  ]
})

export default router
