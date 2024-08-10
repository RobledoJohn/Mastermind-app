<script setup>
    import Header from '@/components/HeaderComponent.vue';
    import Aside from '@/components/AsideComponent.vue';
</script>

<script>

export default {
    data(){
        return{
            
        }
    }, 
    mounted(){

    },
    methods:{
        
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
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzo6yD6aSlWOfjPLT8HS091jJ_vIF_e-evL-aCWR0zVLJlLBnFcxNzmbpHUXpNsTC6XpQ&usqp=CAU" class="card-img-top" alt="Imagen">
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="documentoCliente">Nombre</label>
                            <input type="text" class="form-control" placeholder="John" disabled>
                            <label for="documentoCliente">Identificacion</label>
                            <input type="text" class="form-control" placeholder="10101001001" disabled>
                            <label for="documentoCliente">Telefono</label>
                            <input type="text" class="form-control" placeholder="3101233212" disabled>
                            <label for="documentoCliente">Correo</label>
                            <input type="text" class="form-control" placeholder="a@a.com" disabled>
                            <label for="documentoCliente">Direccion</label>
                            <input type="text" class="form-control" placeholder="Calle 1" disabled>
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
</style>