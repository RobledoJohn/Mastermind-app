<script setup>
import Header from '@/components/HeaderComponent.vue';
import Aside from '@/components/AsideComponent.vue';
</script>

<script>
import axios from 'axios';
import ordenesPopUpVue from '@/components/modal/ordenesPopUp.vue';
import Swal from 'sweetalert2';

export default{
    data(){
        return{
            dataApi: [],
            popUp: false,
            user: JSON.parse(localStorage.auth)
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
        async BorrarOrdenPorId(id_orden){
            try {
                //const response = await axios.delete('http://localhost:8000/api/'+this.user.id+'/ingresos/'+id_orden);
                const response = await axios.delete('https://mastermind-api.vercel.app/api/api/'+this.user.id+'/ingresos/'+id_orden);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
            this.$router.push('/ordenes');            
        },
        togglePopUp(){
            this.popUp = !this.popUp;
        },
        deleteOrder(id){
            const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                cancelButton: "btn btn-danger m-2",
                confirmButton: "btn btn-success m-2"
            },
            buttonsStyling: false
            });
            swalWithBootstrapButtons.fire({
            title: "¿Estas seguro?",
            text: "No podrás revertirlo!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar",
            reverseButtons: true
            }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                title: "Eliminado!",
                text: "El registro ha sido eliminado.",
                icon: "success"
                });
                this.BorrarOrdenPorId(id);
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                title: "Cancelado",
                text: "No se ha eliminado el registro.",
                icon: "error"
                });
            }
            });
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
                        <router-link class="m-1" :to="{path:'/orden/'+data.id}">
                            <button class="btn btn-success"><i class="bi bi-search"></i></button>
                        </router-link>
                        <router-link class="m-1" :to="{path:'/editarOrden/'+data.id}">
                            <button class="btn btn-warning"><i class="bi bi-pencil-square"></i></button>
                        </router-link>
                        <button class="btn btn-danger" @click="deleteOrder(data.id)"><i class="bi bi-x-circle"></i></button>
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