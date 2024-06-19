<script setup>
  import Header from '@/components/HeaderComponent.vue';
  import Aside from '@/components/AsideComponent.vue';
</script>

<template>
    <Header />
    <div class="contenedor">
        <Aside />
        <main class="mainwebapp">
            <div class="baseTable">
                    <div class="buscadorContenedor">
                        <input class="buscador" placeholder="Buscar">
                    </div>
                <div class="botonOrden">
                    <router-link :to="{path:'/creaTecnico'}">
                        <button class="btn">Agregar</button>
                    </router-link>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Telefono</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                    </tbody>
                </table>
            </div>
        </main>
    </div>
</template>

<style>
</style>

<script>
</script>