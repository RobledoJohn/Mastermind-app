<script setup>
    import Header from '@/components/HeaderComponent.vue';
    import Aside from '@/components/AsideComponent.vue';
</script>

<script>
import axios from 'axios';

export default {
    data(){
        return{
             equipos : [],
             user : JSON.parse(localStorage.auth)        
        }
    }, 
    mounted(){
        this.getEquipos();
    },
    methods:{
        async getEquipos(){
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/'+user.id+'/equipos/'+user.id);
                this.equipos = response.data;
                console.log('Equipos:', this.equipos);
            } catch (error) {
                console.log('Error al obtener los equipos:', error);
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
                    <router-link :to="{path:'/nuevoEquipo'}">
                        <button class="btn">Agregar</button>
                    </router-link>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Tipo</th>
                            <th>Cliente</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="equipo in equipos" :key="equipo.id">
                            <td>{{equipo.id}}</td>
                            <td>{{equipo.marca}}</td>
                            <td>{{equipo.modelos}}</td>
                            <td>{{equipo.tipo_equipo}}</td>
                            <td>{{equipo.cliente}}</td>
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