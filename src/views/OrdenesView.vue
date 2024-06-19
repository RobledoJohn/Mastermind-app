<script setup>
    import { onMounted } from 'vue';
    import axios from 'axios';
    import Header from '@/components/HeaderComponent.vue';
    import Aside from '@/components/AsideComponent.vue';

    let ordenes = null;

    const getOrdenes = async () => {
        try {
        const response = await axios.get('https://api.mastermind-app.site/api/api/ordenes');
        ordenes = response.data;
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
                    <tr v-for="orden in ordenes" :key="orden.id">
                    <td>{{orden.id}}</td>
                    <td>{{orden.cliente}}</td>
                    <td>{{orden.equipo}}</td>
                    <td>{{orden.tecnico}}</td>
                    <td>{{orden.enum_estado_reparacion}}</td>            
                    <td>{{orden.created_at}}</td>
                    <td>
                        <router-link :to="{path:'/orden/'+orden.id}">
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