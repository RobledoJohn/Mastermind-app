<script setup>
import Header from '@/components/HeaderComponent.vue';
import Aside from '@/components/AsideComponent.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';

import Swal from 'sweetalert2'

const user = JSON.parse(localStorage.auth);
const tiposDocumentos = ref([]);
const ciudades = ref([]);
const formData = ref({
    id_empresa: user.id,
    nombre: "",
    identificacion: "",
    email: "",
    clave: "",
    telefono: "",
    direccion: "",
    id_ciudad: "",
    enum_tipo_documento: ""
});

const getCiudades = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/ciudades');
        ciudades.value = response.data;
    } catch (error) {
        console.error(error);
    }
};

const getTiposDocumentos = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/tiposDoc');
        tiposDocumentos.value = response.data;
    } catch (error) {
        console.error(error);
    }
};

const submit = async () => {
    try {
        await axios.post(`http://127.0.0.1:8000/api/${user.id}/clientes`, formData.value);      
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Cliente creado con éxito",
            showConfirmButton: false,
            timer: 1500
        });
    } catch (error) {
        console.error('Error al enviar los datos:', error);
        alert("Error al crear el cliente");
    }
};

onMounted(() => {
    getCiudades();
    getTiposDocumentos();
});
</script>

<template>
    <Header />
    <div class="contenedor">
        <Aside />
        <main class="mainwebapp">
            <div class="container">
                <h1 class="tituloH1">Crear Cliente</h1>
                <form class="form" @submit.prevent="submit">
                    <div class="d-flex form-cli">
                        <div class="">
                            <div class="form-group m-6">
                                <label class="form-label" for="tipo">Tipo de documento</label>
                                <select class="form-select" name="tipo" id="tipo" v-model="formData.enum_tipo_documento" required>
                                    <option disabled value="">-Seleccione una opción-</option>
                                    <option v-for="tipo in tiposDocumentos" :key="tipo.id" :value="tipo.id">{{tipo.nombre}}</option>
                                </select>
                            </div>
                            <div class="form-group m-6">
                                <label class="form-label" for="nombre">Nombre</label>
                                <input class="form-control" type="text" id="nombre" v-model="formData.nombre" required>
                            </div>
                            <div class="form-group m-6">
                                <label class="form-label" for="direccion">Dirección</label>
                                <input class="form-control" type="text" id="direccion" v-model="formData.direccion" required>
                            </div>
                            <div class="form-group m-6">
                                <label class="form-label" for="email">Email</label>
                                <input class="form-control" type="email" id="email" v-model="formData.email" required>
                            </div>
                        </div>
                        <div>
                            <div class="form-group m-6">
                                <label class="form-label" for="documento">Documento</label>
                                <input class="form-control" type="number" id="documento" v-model="formData.identificacion" required>
                            </div>
                            <div class="form-group m-6">
                                <label class="form-label" for="telefono">Teléfono</label>
                                <input class="form-control" type="number" id="telefono" v-model="formData.telefono" required>
                            </div>
                            <div class="form-group m-6">
                                <label class="form-label" for="ciudad">Ciudad</label>
                                <select class="form-select" name="ciudad" id="ciudad" v-model="formData.id_ciudad" required>
                                    <option disabled value="">-Seleccione una opción-</option>
                                    <option v-for="ciudad in ciudades" :key="ciudad.id" :value="ciudad.id">{{ciudad.nombre}}</option>
                                </select>
                            </div>
                            <div class="form-group m-6">
                                <button class="btn btn-primary" type="submit">Crear</button>
                                <a class="btn btn-secondary" href="/clientes">Cancelar</a>
                            </div>
                        </div>  
                    </div>
                </form>
            </div>
        </main>
    </div>
</template>

<style>
.tituloH1{
    text-align: center;
    margin: 20px;
}
.form-cli{
    display: flex;
    justify-content: center;
}
.m-6{
    text-align: center;
    margin: 20px;
    .btn{
        margin: 30px 10px;
    }
}
</style>
