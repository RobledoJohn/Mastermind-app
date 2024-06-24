<script setup>
    import { onMounted, ref } from 'vue';
    import axios from 'axios';
    import Header from '@/components/HeaderComponent.vue';
    import Aside from '@/components/AsideComponent.vue';

    const dataApi= ref(null);

    const getOrdenes = async () => {
        try {
            const response = await axios.get('https://mastermind-api.vercel.app/api/api/ingresos');
            dataApi.value = response.data;
            console.log('Órdenes:', dataApi.value);
        } catch (error) {
            console.error('Error fetching órdenes:', error);
        }
    };

    // Llama a getOrdenes al montar el componente
    onMounted(() => {
        getOrdenes();
    });
</script>

<template> 
    <Header />
    <div class="contenedor">
        <Aside />
        <main class="mainwebapp">
            <h1>Home</h1>
            <div class="baseTable">
                <div class="buscadorContenedor">
                <input class="buscador" placeholder="Buscar Orden">
            </div>
            <div class="botonOrden">
                <router-link :to="{path:'/crearOrden'}">
                    <button class="btn">Agregar</button>
                </router-link>
            </div>
            <table class="table">
                <thead class="table">
                    <tr>
                    <th scope="col">Orden</th>
                    <th scope="col">Cliente</th>
                    <th scope="col">Equipo</th>
                    <th scope="col">Técnico</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="data in dataApi" :key="data.id">
                    <td>{{data.id}}</td>
                    <td>{{data.equipos.clientes.nombre}}</td>
                    <td>{{data.equipos.modelos.nombre}}</td>
                    <td>{{data.tecnicos.nombre}}</td>
                    <td>{{data.enum_estado_reparacion}}</td>            
                    <td>{{data.created_at}}</td>
                    <td>
                        <router-link :to="{path:'/orden/'+data.id}">
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
.baseTable{
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    margin: 50px;
}
.buscadorContenedor{
    display: flex;
    justify-content: center;
    width: 100%;
    .buscador{
        width: 30%;
        padding: 5px;
        font-size: 18px;
        border-radius: 10px;
        border: transparent;
    }
}
.botonOrden{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    .btn{
        color: #ffffff;
        background-color: #12263A;
    }
    .btn:hover{
        color: #12263A;
        background-color: #06BCC1;
    }
}
.eye{
    font-size: 20px;
    color: #06BCC1;
}
</style>