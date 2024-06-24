<script setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    import Header from '@/components/HeaderComponent.vue';
    import Aside from '@/components/AsideComponent.vue';

    let dataApi = ref(null);

    const getApiData = async () => {
        try {
            const response = await axios.get('https://mastermind-api.vercel.app/api/api/productos');
            dataApi.value = response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Llama a getOrdenes al montar el componente
    onMounted(() => {
        getApiData();
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
                        <th>Categoria</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="data in dataApi" :key="data.id">
                        <td>{{data.SKU}}</td>
                        <td>{{data.categorias.nombre}}</td>
                        <td>{{data.nombre}}</td>
                        <td>{{data.cantidad}}</td>
                        <td>
                            <router-link :to="{path:'/producto/'+data.id}">
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