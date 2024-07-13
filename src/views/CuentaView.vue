<script setup>
  import Header from '@/components/HeaderComponent.vue';
  import Aside from '@/components/AsideComponent.vue';
</script>

<script>

export default {
    data() {
        return {
            user: null
        }
    },
    created() {
        this.loadUserData();
    },
    methods: {
        loadUserData() {
            const user = JSON.parse(localStorage.getItem('auth'));
            this.user = user;
        }
    }
}

</script>

<template>
    <Header />
    <div class="contenedor">
        <Aside />
        <main class="mainwebapp">
            <h1>cuenta</h1>
            <div class="baseTable">
                <form class="p-3 d-flex gap-5" >
                    <div v-if="user">
                        <div class="mb-3">
                            <label for="nombre" class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="nombre" v-model="user.nombre">
                        </div>
                        <div class="mb-3">
                            <label for="nit" class="form-label">nit</label>
                            <input type="text" class="form-control" id="nit" v-model="user.nit">
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" v-model="user.email">
                        </div>
                    </div>
                    <div>
                        <div class="mb-3">
                            <label for="clave" class="form-label">clave</label>
                            <input type="text" class="form-control" id="clave" v-model="user.clave">
                        </div>
                        <div class="mb-3">
                            <label for="direccion" class="form-label">direccion</label>
                            <input type="text" class="form-control" id="direccion" v-model="user.direccion">
                        </div>
                        <div class="mb-3">
                            <label for="telefono" class="form-label">telefono</label>
                            <input type="tel" class="form-control" id="telefono" v-model="user.telefono">
                        </div>
                    </div>
                </form>
            <button class="btn btn-primary m-2">Guardar</button>
            </div>
        </main>
    </div>   
</template>

<style>
.cuenta{
    display: flex;
    flex-direction: row;
    background-color: grey;
    align-items: center;
}
.imgCuenta{
    width: 600px;
}
</style>
