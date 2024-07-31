<script setup>
  import Header from '@/components/HeaderComponent.vue';
  import Aside from '@/components/AsideComponent.vue';
</script>

<script>

</script>

<template>
    <Header />
    <div class="contenedor">
        <Aside />
        <main class="mainwebapp">
            <h1>Home</h1>
            <div class="baseTable">
                <h1 class="">Crear Orden</h1>
                <form class="p-3 d-flex gap-5">
                <div>
                    <label for="nombre" class="form-label">nombre</label>
                    <input type="text" class="form-control" id="nombre" aria-describedby="emailHelp">
                </div>
                <div>
                    <label for="nit" class="form-label">nit</label>
                    <input type="text" class="form-control" id="nit" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
                </div>
                </form>
            </div>
        </main>
    </div>
</template>