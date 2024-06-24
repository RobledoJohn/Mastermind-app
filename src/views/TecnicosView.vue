<script setup>
    import { onMounted, ref } from 'vue';
    import axios from 'axios';
    import Header from '@/components/HeaderComponent.vue';
    import Aside from '@/components/AsideComponent.vue';

    const dataApi = ref(null);

    const getTecnicos = async () => {
        try {
            const response = await axios.get('https://mastermind-api.vercel.app/api/api/tecnicos');
            dataApi.value = response.data;
            console.log('Órdenes:', dataApi.value);
        } catch (error) {
            console.error('Error fetching órdenes:', error);
        }
    };

    // Llama a getOrdenes al montar el componente
    onMounted(() => {
        getTecnicos();
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
                    <router-link :to="{path:'/creaTecnico'}">
                        <button class="btn">Agregar</button>
                    </router-link>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Telefono</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in dataApi" :key="data.id">
                            <td>{{data.avatar}}</td>
                            <td>{{data.id}}</td>
                            <td>{{data.nombre}}</td>
                            <td>{{data.telefono}}</td>
                            <td>
                                <router-link :to="{path:'/tecnico/'+data.id}">
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