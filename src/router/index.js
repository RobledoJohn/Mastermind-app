import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/HomeView.vue'
import cuenta from '../views/CuentaView.vue'
import empresa from '../views/EmpresaView.vue'
import ordenes from '../views/OrdenesView.vue'
import inventario from '../views/InventarioView.vue'
import proveedores from '../views/ProveedoresView.vue'
import servicios from '../views/ServiciosView.vue'
import ventas from '../views/VentasView.vue'
import tecnicos from '../views/TecnicosView.vue'
import misEquipos from '../views/MisEquiposView.vue'

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
      path: '/empresa',
      name: 'empresa',
      component: empresa
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
    },
    {
      path: '/ventas',
      name: 'ventas',
      component: ventas
    },
    {
      path: '/tecnicos',
      name: 'tecnicos',
      component: tecnicos
    },
    {
      path: '/misEquipos',
      name: 'misEquipos',
      component: misEquipos
    }

  ]
})

export default router
