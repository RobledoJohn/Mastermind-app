<script setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    import Header from '@/components/HeaderComponent.vue';
    import Aside from '@/components/AsideComponent.vue';

    let dataApi = ref(null);

    const getAPIData = async () => {
        try {
            const response = await axios.get('https://mastermind-api.vercel.app/api/api/clientes');
            dataApi.value = response.data;
        } catch (error) {
            console.error('Error fetching clientes:', error);
        }
    };

    // Llama a getOrdenes al montar el componente
    onMounted(() => {
        getAPIData();
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
                            <th>Empresa</th>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Documento</th>
                            <th>Telefono</th>
                            <th>Direccion</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in dataApi" :key="data.id">
                            <td>{{data.empresa.nombre}}</td>
                            <td>{{data.id}}</td>
                            <td>{{data.nombre}}</td>
                            <td>{{data.identificacion}}</td>
                            <td>{{data.telefono}}</td>
                            <td>{{data.direccion}}</td>
                            <td>
                                <router-link :to="{path:'/cliente/'+data.id}">
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