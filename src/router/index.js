import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/auth/LoginView.vue'
import recuperacion from '../views/auth/RecuperacionView.vue'
import registro from '../views/auth/RegistroView.vue'
import home from '../views/HomeView.vue'
import cuenta from '../views/CuentaView.vue'
import empresa from '../views/EmpresaView.vue'
import ordenes from '../views/OrdenesView.vue'
import Orden from '../views/OrdenView.vue'
import editOrden from '../views/EditOrdenView.vue'
import clientes from '../views/ClientesView.vue'
import crearCliente from '../views/CrearClienteView.vue'
import inventario from '../views/InventarioView.vue'
import verCliente from '../views/VerClienteView.vue'
import ventas from '../views/VentasView.vue'
import tecnicos from '../views/TecnicosView.vue'
import misEquipos from '../views/MisEquiposView.vue'
import nuevoEquipo from '../views/NuevoEquipoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/recuperacion',
      name: 'recuperacion',
      component: recuperacion
    },
    {
      path: '/registro',
      name: 'registro',
      component: registro
    },
    {
      path: '/home',
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
      path: '/Orden/:id',
      name: 'Orden',
      component: Orden
    },
    {
      path: '/editarOrden/:id',
      name: 'OrdenEdit',
      component: editOrden
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: clientes
    },
    {
      path: '/crear/cliente',
      name: 'crearCliente',
      component: crearCliente
    },
    {
      path: '/inventario',
      name: 'inventario',
      component: inventario
    },
    {
      path: '/clientes/:id',
      name: 'verCliente',
      component: verCliente
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
      path: '/nuevoEquipo',
      name: 'nuevoEquipo',
      component: nuevoEquipo
    }
  ]
});

export default router