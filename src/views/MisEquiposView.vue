<script setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    import Header from '@/components/HeaderComponent.vue';
    import Aside from '@/components/AsideComponent.vue';

    let dataApi = ref(null);

    const getApiData = async () => {
        try {
            const response = await axios.get('https://mastermind-api.vercel.app/api/api/equipos');
            dataApi.value = response.data;
        } catch (error) {
            console.error('Error fetching equipos:', error);
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
                            <th>IMEI</th>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Tipo</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in dataApi" :key="data.id">
                            <td>{{data.id}}</td>
                            <td>{{data.modelos.marca.nombre}}</td>
                            <td>{{data.modelos.nombre}}</td>
                            <td>{{data.modelos.enum_tipo_equipos}}</td>
                            <td>
                                <router-link :to="{path:'/miEquipo/'+data.id}">
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