import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/HomeView.vue'
import cuenta from '../views/CuentaView.vue'
import empresa from '../views/EmpresaView.vue'
import empresas from '../views/EmpresasView.vue'
import ordenes from '../views/OrdenesView.vue'
import inventario from '../views/InventarioView.vue'
//import clientes from '../views/ClientesView.vue'
import ventas from '../views/VentasView.vue'
import tecnicos from '../views/TecnicosView.vue'
import misEquipos from '../views/MisEquiposView.vue'
import crearOrden from '../views/CrearOrden.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/',
      name: 'login',
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
      path: '/empresas',
      name: 'empresas',
      component: empresas
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
    },
    {
      path: '/crearOrden',
      name: 'crearOrden',
      component: crearOrden
    }

  ]
})

export default router
