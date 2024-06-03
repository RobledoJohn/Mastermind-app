import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/HomeView.vue'
import cuenta from '../views/CuentaView.vue'
import ordenes from '../views/OrdenesView.vue'
import inventario from '../views/InventarioView.vue'
import proveedores from '../views/ProveedoresView.vue'
import servicios from '../views/ServiciosView.vue'

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
    },
    {
      path: '/inventario',
      name: 'inventario',
      component: inventario
    },
    {
      path: '/proveedores',
      name: 'proveedores',
      component: proveedores
    },
    {
      path: '/servicios',
      name: 'servicios',
      component: servicios
    }
  ]
})

export default router
