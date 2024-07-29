<script setup>
  import Header from '@/components/HeaderComponent.vue';
  import Aside from '@/components/AsideComponent.vue';
</script>
<!-------------------------------------------------------->
<template>
  <Header />
  <div class="contenedor">
    <Aside />
    <main class="mainwebapp container">
      <div class="d-flex justify-content-center">
        <img class="img-fluid w-50 mt-5" src="../assets/img/mastermind-letra-b.png" alt="logo">
      </div>
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