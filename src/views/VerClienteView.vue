<script setup>
    import Header from '@/components/HeaderComponent.vue';
    import Aside from '@/components/AsideComponent.vue';
</script>

<script>

import axios from 'axios';

export default {
    data(){
        return{
            user: JSON.parse(localStorage.auth),
            cliente : []
        }
    }, 
    mounted(){
        this.getCliente(this.user.id, this.$route.params.id);
    },
    methods:{
        async getCliente(id_empresa, id_cliente){
            console.log('id_empresa:', id_empresa);
            console.log('id_cliente:', id_cliente);
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/'+id_empresa+'/cliente/'+id_cliente);
                this.cliente = response.data;
            } catch (error) {
                console.log('Error: ', error);
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
                <!--ver informacion del cliente tipo card-->
                <div class="card text-center">
                    <div class="card-header">
                        <img :src="cliente.avatar" class="card-img-top" alt="Imagen">
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="nombre">Nombre</label>
                            <input type="text" class="form-control" id="nombre" :value="cliente.nombre" disabled>
                            <label for="identificacion">Identificacion</label>
                            <input type="text" class="form-control" id="identificacion" :value="cliente.identificacion" disabled>
                            <label for="telefono">Telefono</label>
                            <input type="text" class="form-control" id="telefono" :value="cliente.telefono" disabled>
                            <label for="correo">Correo</label>
                            <input type="text" class="form-control" id="correo" :value="cliente.email" disabled>
                            <label for="direccion">Direccion</label>
                            <input type="text" class="form-control" id="direccion" :value="cliente.direccion" disabled>
                            <div>
                                <button class="btn btn-success"><a href="/misEquipos">Ver Equipos</a></button>
                                <button class="btn btn-primary">Editar</button>
                                <button class="btn btn-danger">Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style>
.card-img-top{
    height: 200px;
    width: 200px;
}
</style>