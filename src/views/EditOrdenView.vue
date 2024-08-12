<script setup>
import Header from '@/components/HeaderComponent.vue';
import Aside from '@/components/AsideComponent.vue';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import axios from 'axios';

// Obtener los parámetros de la ruta
const route = useRoute();
const dataApi = ref({});
const tecnicos = ref([]);
const formData = ref({
    id_tecnico: "",
    descripcion: "",
    enum_estado_reparacion: ""
});
const user = JSON.parse(localStorage.auth);

// Función para obtener la orden
const getOrden = async (id_empresa, id_orden) => {
    try {
        const response = await axios.get(`https://mastermind-api.vercel.app/api/api/${id_empresa}/ingresos/${id_orden}`);
        //const response = await axios.get(`http://localhost:8000/api/${id_empresa}/ingresos/${id_orden}`);
        dataApi.value = response.data;
        // Inicializar formData con los datos obtenidos
        formData.value = {
            id_tecnico: response.data.id_tecnico || "",
            descripcion: response.data.descripcion || "",
            enum_estado_reparacion: response.data.enum_estado_reparacion || ""
        };
    } catch (error) {
        console.log(error);
    }
};

const getTecnicos = async (idEmpresa) => {
    try {
        const response = await axios.get(`https://mastermind-api.vercel.app/api/api/${idEmpresa}/tecnicos`);
        //const response = await axios.get(`http://localhost:8000/api/${idEmpresa}/tecnicos`);
        tecnicos.value = response.data;
    } catch (error) {
        console.log(error);
    }
};

const submit = async () => {
    console.log(user.id);
    console.log(formData.value);
    try {
        await axios.put(`https://mastermind-api.vercel.app/api/api/${user.id}/ingresos/${route.params.id}`, formData.value);
        //await axios.put(`http://127.0.0.1:8000/api/${user.id}/ingresos/${route.params.id}`, formData.value);
        alert("Orden actualizada con éxito");
    } catch (error) {
        console.error('Error al enviar los datos:', error);
        alert("Error al actualizar la orden");
    }
};

// Ejecutar la función al montar el componente
onMounted(() => {
    const user = JSON.parse(localStorage.auth);
    getOrden(user.id, route.params.id);
    getTecnicos(user.id);
});
</script>

<template>
    <Header />
    <div class="contenedor">
        <Aside />
        <main class="mainwebapp">
            <form class="form  m-5" @submit.prevent="submit">
                <h3 class="tituloH3">Informacion del equipo</h3>
                <div class="contenedor-orden d-flex justify-content-center">
                    <div class="m-4">
                        <label class="form-label" for="orden">No. Orden</label>
                        <input class="form-control" type="text" id="orden" :value="dataApi.id" disabled>
                    </div>
                    <div class="m-4">
                        <label class="form-label" for="cliente">Cliente</label>
                        <input class="form-control" type="text" id="cliente" :value="dataApi.cliente" disabled>
                    </div>
                    <div class="m-4">
                        <label class="form-label" for="modelo">Modelo</label>
                        <input class="form-control" type="text" id="modelo" :value="dataApi.modelo" disabled>
                    </div>
                    <div class="m-4">
                        <label class="form-label" for="marca">Marca</label>
                        <input class="form-control" type="text" id="marca" :value="dataApi.marca" disabled>
                    </div>
                </div>
                <h3 class="tituloH3">Informacion de reparación</h3>
                <div class="contenedor-block">
                    <div>
                        <div class="m-4">
                            <label class="form-label" for="estado">Estado actual: <strong>{{ dataApi.enum_estado_reparacion }}</strong> </label>
                            <select class="form-select" name="estado" id="estado" v-model.number="formData.enum_estado_reparacion">
                                <option value="1">Recepción</option>
                                <option value="2">Diagnóstico</option>
                                <option value="3">Reparación</option>
                                <option value="4">Esperando Repuesto</option>
                                <option value="5">Pruebas</option>
                                <option value="6">Listo para entrega</option>
                                <option value="7">Finalizado</option>
                            </select>
                        </div>
                        <div class="m-4">
                            <label class="form-label" for="created">Fecha Ingreso</label>
                            <input class="form-control" type="text" id="created" :value="dataApi.created_at" disabled>
                        </div>
                        <div class="m-4">
                            <label class="form-label" for="enlace">Enlace de seguimiento</label>
                            <div class="d-flex">
                                <input class="form-control" type="text" id="enlace" :value="dataApi.enlace_seguimiento" disabled>
                                <router-link class="btn btn-primary"><i class="bi bi-arrow-down-left-square-fill"></i></router-link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="m-4">
                            <label class="form-label" for="tecnico">Técnico</label>
                            <select class="form-select" name="tecnico" id="tecnico" v-model="formData.id_tecnico">
                                <option v-for="tecnico in tecnicos" :key="tecnico.id" :value="tecnico.id">
                                    {{ tecnico.nombre }}
                                </option>
                            </select>
                        </div>
                        <div class="m-4">
                            <label class="form-label" for="updated">Fecha Actualización</label>
                            <input class="form-control" type="text" id="updated" :value="dataApi.updated_at" disabled>
                        </div>
                        <div class="m-4">
                            <label class="form-label d-block" for="descripcion">Descripción</label>
                            <textarea class="form-control no-rezise" id="descripcion" v-model="formData.descripcion"></textarea>
                        </div>
                    </div>
                </div>
                <div class="">
                    <button class="btn btn-primary" type="submit">Guardar</button>
                </div>
            </form>
        </main>
    </div>
</template>

<style>

.no-rezise{
    resize: none;
    height: 100px;
}
.tituloH3{
    margin: 30px 0 0 20px;
    font-size: x-large;
    text-align: center;
}
.contenedor-block{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    .form-control{
        width: 400px;

    }
}
.btn-primary{
    margin-left: 10px;
    background-color: #12263A;
    border-color: #12263A;
}

.btn-primary:hover{
    background-color: #06BCC1;
    border-color: #06BCC1;
    color: #12263A;
}
</style>