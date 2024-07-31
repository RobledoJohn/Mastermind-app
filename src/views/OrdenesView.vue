<script setup>
import Header from '@/components/HeaderComponent.vue';
import Aside from '@/components/AsideComponent.vue';
import ordenesPopUpVue from '@/components/modal/ordenesPopUp.vue';
</script>

<script>
import axios from 'axios';

export default{
    data(){
        return{
            dataApi: [],
            popUp: false
        }
    }, 
    mounted(){
        const user = JSON.parse(localStorage.auth);
        this.getOrdenes(user.id);
    },
    methods:{
        async getOrdenes(id){
            try {
                //const response = await axios.get('http://localhost:8000/api/'+id+'/ingresos');
                const response = await axios.get('https://mastermind-api.vercel.app/api/api/'+id+'/ingresos');
                this.dataApi = response.data;
            } catch (error) {
                console.log(error);
            }
        },
        togglePopUp(){
            this.popUp = !this.popUp;
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
                <input class="buscador" placeholder="Buscar Orden">
            </div>
            <ordenesPopUpVue v-show="popUp" @close="togglePopUp()"/>
            <div class="botonOrden">
                <button class="btn" @click="togglePopUp()">Agregar</button>
            </div>
            <table class="table">
                <thead class="table">
                    <tr>
                    <th scope="col">Orden</th>
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
                    <td>{{data.id_equipo}}</td>
                    <td>{{data.id_tecnico}}</td>
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