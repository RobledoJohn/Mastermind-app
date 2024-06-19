<script setup>
    import { onMounted } from 'vue';
    import axios from 'axios';
    import Header from '@/components/HeaderComponent.vue';
    import Aside from '@/components/AsideComponent.vue';

    let inventarios = null;

    const getinventarios = async () => {
        try {
        const response = await axios.get('https://api.mastermind-app.site/api/api/inventarios');
        inventarios = response.data;
        } catch (error) {
        console.error('Error fetching inventarios:', error);
        }
    };

    // Llama a getOrdenes al montar el componente
    onMounted(() => {
        getinventarios();
    });
</script>

<template>
    <Header />
    <div class="contenedor">
        <Aside />
        <main class="mainwebapp">
        <div class="baseTable">
            <div class="buscadorContenedor">
                <input class="buscador" placeholder="Buscar">
            </div>
            <div class="botonOrden">
                <router-link :to="{path:'/creaItem'}">
                    <button class="btn">Agregar</button>
                </router-link>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>SKU</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Categoria</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="inv in inventarios" :key="inv.id">
                        <td>{{inv.id}}</td>
                        <td>{{inv.Producto}}</td>
                        <td>{{inv.Cantidad}}</td>
                        <td>{{inv.Categoria}}</td>
                        <td>{{inv.Opciones}}</td>
                        <td>
                            <router-link :to="{path:'/inventario/'+inv.id}">
                                <i class="bi bi-eye eye"></i>
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </main>
    </div>
</template>

<style>
</style>

<script>
</script>