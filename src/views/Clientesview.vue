<script setup>
    import Header from '@/components/HeaderComponent.vue';
    import Aside from '@/components/AsideComponent.vue';
</script>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            dataApi: []
        }
    }, 
    mounted(){
        const user = JSON.parse(localStorage.auth);
        this.getOrdenes(user.id);
    },
    methods:{
        async getOrdenes(id){
            try {
                //const response = await axios.get('http://127.0.0.1:8000/api/'+id+'/clientes');
                const response = await axios.get('https://mastermind-api.vercel.app/api/api/'+id+'/clientes');
                this.dataApi = response.data;
            } catch (error) {
                console.log('Error al obtener el inventario:', error);
            }
        }
    }
};
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
                            <th>Nombre</th>
                            <th>Documento</th>
                            <th>Telefono</th>
                            <th>Direccion</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in dataApi" :key="data.id">
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