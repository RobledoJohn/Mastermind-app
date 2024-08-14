<script setup>
    import Header from '@/components/HeaderComponent.vue';
    import Aside from '@/components/AsideComponent.vue';
</script>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            modelos: [],
            marcas: [], 
            cliente: '',
            marcaSeleccionada: '',
            modeloSeleccionado: '',
            tipoEquipoSeleccionado: '',
            user: JSON.parse(localStorage.auth),
            form: {
                id_marca: '',
                id_modelo: '',
                enum_tipo_equipos: '',
                identificacion: ''
            }
        }
    }, 
    mounted(){
        this.getMarcas();
        this.getModelos();
    },
    methods:{
        async getMarcas(){
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/marcas');
                this.marcas = response.data;
            } catch (error) {
                console.log('Error al obtener las marcas:', error);
            }
        },
        async getModelos(){
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/modelos');
                this.modelos = response.data;
            } catch (error) {
                console.log('Error al obtener los modelos:', error);
            }
        },
        async submit() {
                        
            this.form.id_marca = this.marcaSeleccionada;
            this.form.id_modelo = this.modeloSeleccionado;
            this.form.enum_tipo_equipos = this.tipoEquipoSeleccionado;
            this.form.identificacion = this.cliente;

            console.log('envio: ' + JSON.stringify(this.form, null, 2));


            try {
                const response = await axios.post('http://127.0.0.1:8000/api/'+this.user.id+'/equipos', this.form);
                console.log('Equipo creado:', response.data);
                alert('Equipo creado correctamente');
            } catch (error) {
                console.log('Error al crear el equipo:', error);
                alert('Error al crear el equipo');
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
            <h1 class="text-center mt-4">Crear nuevo equipo</h1>
            <div class="contenedorNuevoEquipo">
                <form class="form" @submit.prevent="submit">
                    <div class="form-group">
                        <div class="div-row">
                            <div class="m-3">
                                <div class="div-input">
                                    <label class="form-label" for="marca">Marca</label>
                                    <div class="div-block">
                                        <select class="form-select" id="marca" v-model="marcaSeleccionada">
                                            <option value="0" disabled selected>-Seleccionar-</option>
                                            <option v-for="marca in marcas" :key="marca.id" :value="marca.id">
                                                {{ marca.nombre }}
                                            </option>
                                        </select>
                                        <button class="btn btn-primary" type="button"><i class="bi bi-plus"></i></button>
                                    </div>
                                </div>
                                <div class="div-input mt-3">
                                    <label class="form-label" for="documentoCliente">Documento del cliente</label>
                                    <input class="form-control" type="text" v-model="cliente" id="documentoCliente">
                                </div>
                            </div>
                            <div class="m-3">
                                <div class="div-input">
                                    <label class="form-label" for="modelo">Modelo</label>
                                    <div class="div-block">
                                        <select class="form-select" id="modelo" v-model="modeloSeleccionado">
                                            <option value="0" disabled selected>-Seleccionar-</option>
                                            <option v-for="modelo in modelos" :key="modelo.id" :value="modelo.id">
                                                {{ modelo.nombre }}
                                            </option>
                                        </select>
                                        <button class="btn btn-primary" type="button"><i class="bi bi-plus"></i></button>
                                    </div>
                                    <div class="div-input mt-3">
                                        <label class="form-label" for="tipoEquipo">Tipo de equipo</label>
                                        <select class="form-select" v-model="tipoEquipoSeleccionado" id="tipoEquipo">
                                            <option value="0" disabled selected>-Seleccionar-</option>
                                            <option value="1">Celular</option>
                                            <option value="2">Tablet</option>
                                            <option value="3">AIO</option>
                                            <option value="4">Portátil</option>
                                            <option value="5">Escritorio</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-primary" type="submit">Crear equipo</button>
                </form>
            </div>
        </main>
    </div>
</template>

<style>

.m-3{
    width: 400px;
}


.contenedorNuevoEquipo{
    width: 80%;
}

.form{
    display: flex;
    flex-direction: column;
    align-items: center;
}

form.group{
    display: flex;
    flex-direction: row;
}

.div-row{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 15px;
}

.div-block{
    display: flex;
    align-items: center;
}

.div-input{
    display: flex;
    flex-direction: column;
}

</style>
