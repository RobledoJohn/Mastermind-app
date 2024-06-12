<template>
    <h1>Empresas</h1>
    <div class="baseTable">
        <div class="buscadorContenedor">
            <input class="buscador" placeholder="Buscar Empresa">
        </div>
        <div class="botonOrden">
            <router-link :to="{path:'/crearEmpresa'}">
                <button class="btn">Agregar</button>
            </router-link>
        </div>
        <table class="table">
            <thead class="table">
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Nit</th>
            <th scope="col">Correo</th>
            <th scope="col">Telefono</th>
            <th scope="col">Fecha</th>
            <th scope="col">Opciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="empresa in empresas" :key="empresa.id">
            <td>{{empresa.id}}</td>
            <td>{{empresa.nombre}}</td>
            <td>{{empresa.nit}}</td>
            <td>{{empresa.email}}</td>
            <td>{{empresa.telefono}}</td>            
            <td>{{empresa.created_at}}</td>
            <td>
                <router-link :to="{path:'/empresa/'+empresa.id}">
                    <i class="bi bi-eye eye"></i>
                </router-link>
            </td>
            </tr>
        </tbody>
        </table>
    </div>
    
</template>

<style>
</style>

<script>

import axios from 'axios';

export default{
    data(){
        return{empresas: null}
    },
    mounted(){
        this.getEmpresas();
    },
    methods:{
        async getEmpresas(){
            try{
                axios.get('http://localhost:8000/api/empresas')
                .then(response =>{
                    this.empresas = response.data;
                });
            }catch(error){
                console.log(error);
            }
        }
    }
}
</script>