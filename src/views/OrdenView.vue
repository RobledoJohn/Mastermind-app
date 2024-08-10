<script setup>
import Header from '@/components/HeaderComponent.vue';
import Aside from '@/components/AsideComponent.vue';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import axios from 'axios';

// Obtener los parámetros de la ruta
const route = useRoute();
const dataApi = ref([]);

// Función para obtener la orden
const getOrden = async (id_empresa, id_orden) => {    
    try {
        const response = await axios.get(`http://localhost:8000/api/${id_empresa}/ingresos/${id_orden}`);
        dataApi.value = response.data;
        console.log(dataApi.value, id_empresa, id_orden);
    } catch (error) {
        console.log(error);
    }
};

// Ejecutar la función al montar el componente
onMounted(() => {
    const user = JSON.parse(localStorage.auth);
    getOrden(user.id, route.params.id);
});
</script>

<template> 
    <Header />
    <div class="contenedor">
        <Aside />
        <main class="mainwebapp">
            <form class="form  m-5">
                <h3 class="tituloH3">Informacion del equipo</h3>
                <div class="contenedor-orden d-flex justify-content-center">
                    <div class="m-4">
                        <label class="form-label" for="">No. Orden</label>
                        <input class="form-control" type="text" :value="dataApi.id" disabled>
                    </div>
                    <div class="m-4">
                        <label class="form-label" for="">Cliente</label>
                        <input class="form-control" type="text" :value="dataApi.cliente" disabled>
                    </div>
                    <div class="m-4">
                        <label class="form-label" for="">Modelo</label>
                        <input class="form-control" type="text" :value="dataApi.modelo" disabled>
                    </div>
                    <div class="m-4">
                        <label class="form-label" for="">Marca</label>
                        <input class="form-control" type="text" :value="dataApi.marca" disabled>
                    </div>
                </div>
                <h3 class="tituloH3">Informacion de reparación</h3>
                <div class="contenedor-block">
                    <div>
                        <div class="m-4">
                            <label class="form-label" for="">Estado</label>
                            <input class="form-control" type="text" :value="dataApi.enum_estado_reparacion" disabled>
                            </div>
                        <div class="m-4">
                            <label class="form-label" for="">Fecha Ingreso</label>
                            <input class="form-control" type="text" :value="dataApi.created_at" disabled>
                            </div>
                        <div class="m-4">
                            <label class="form-label" for="">Enlace de seguimiento</label>
                            <div class="d-flex">
                                <input class="form-control" type="text" :value="dataApi.enlace_seguimiento" disabled>
                                <router-link class="btn btn-primary"><i class="bi bi-arrow-down-left-square-fill"></i></router-link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="m-4">
                            <label class="form-label" for="">Técnico</label>
                            <input class="form-control" type="text" :value="dataApi.tecnico" disabled>
                            </div>
                        <div class="m-4">
                            <label class="form-label" for="">Fecha Actualización</label>
                            <input class="form-control" type="text" :value="dataApi.updated_at" disabled>
                        </div>
                        <div class="m-4">
                            <label class="form-label d-block" for="">Descripción</label>
                            <p>{{ dataApi.descripcion }}</p>
                        </div>
                    </div>
                </div>
            </form>
        </main>
    </div>
</template>

<style>
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