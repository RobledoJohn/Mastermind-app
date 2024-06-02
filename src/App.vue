<script setup>
  import TheHeader from '@/components/TheHeader.vue';
  import TheAside from '@/components/TheAside.vue';
</script>

<template>
  <header>
    <TheHeader />
  </header>
  <div class="container">
    <Aside class="asidewebapp">
      <TheAside />
    </Aside>
    <main class="mainwebapp">
      <router-view />
    </main>
  </div>
  

</template>

<style scoped>
.container{
  font-family: "Inter", sans-serif;
  display: flex;
  margin: 0;
  padding: 0;
  height: 100vh;
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
