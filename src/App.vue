<script setup>
  import TheHeader from '@/components/TheHeader.vue';
  import TheAside from '@/components/TheAside.vue';
</script>

<template>
  <header>
    <TheHeader />
  </header>
  <div class="contenedor">
    <Aside class="asidewebapp">
      <TheAside />
    </Aside>
    <main class="mainwebapp">
      <router-view />
    </main>
  </div>
</template>

<style scoped>

root{
  margin: 0;
  padding: 0;
}
.contenedor{
  font-family: "Inter", sans-serif;
  display: flex;
  height: 90vh;
  width: 100%;
}
.asidewebapp{
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 250px;
}
.mainwebapp{
  background-color: #d9d9d9;
  height: 100%;
  width: 100%;
}
</style>
