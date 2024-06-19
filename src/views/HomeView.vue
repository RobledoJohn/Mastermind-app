<script setup>
  import Header from '@/components/HeaderComponent.vue';
  import Aside from '@/components/AsideComponent.vue';
</script>
<!-------------------------------------------------------->
<template>
  <Header />
  <div class="contenedor">
    <Aside />
    <main class="mainwebapp">
      <h1>Home</h1>
    </main>
  </div>
</template>
<!-------------------------------------------------------->
<style>
.contenedor{
  font-family: "Inter", sans-serif;
  display: flex;
  height: 90vh;
  width: 100%;
}
.mainwebapp{
  background-color: #d9d9d9;
  height: 100%;
  width: 100%;
}
</style>