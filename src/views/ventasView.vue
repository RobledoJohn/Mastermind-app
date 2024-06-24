<script setup>
    import { onMounted, ref } from 'vue';
    import axios from 'axios';
    import Header from '@/components/HeaderComponent.vue';
    import Aside from '@/components/AsideComponent.vue';

    const dataApi = ref(null);

    const getApiData = async () => {
        try {
            const response = await axios.get('https://mastermind-api.vercel.app/api/api/ventas');
            dataApi.value = response.data;
            console.log('data:', dataApi.value);
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
                <table class="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Cliente</th>
                            <th>Equipo</th>
                            <th>Monto</th>
                            <th>Medio Pago</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in dataApi" :key="data.id">
                            <td>{{data.id}}</td>
                            <td>{{data.detalle_venta.ingresos.equipos.clientes.nombre}}</td>
                            <td>{{data.detalle_venta.ingresos.equipos.modelos.nombre}}</td>
                            <td>${{data.detalle_venta.monto}}</td>
                            <td>{{data.enum_medio_pago}}</td>
                            <td>
                                <router-link :to="{path:'/venta/'+data.id}">
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