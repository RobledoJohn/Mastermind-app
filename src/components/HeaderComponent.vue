<template>
  <nav>
    <img class="d-inline-block mx-2" src="../assets/img/mastermind-lateral-w.png" alt="Logo" style="height: 50px;">
    <div class="icons"> 
        <router-link :to="{path:'/home'}" class="botonMenu">
            <i class="bi bi-house"></i>
        </router-link>    
        <!--<router-link :to="{path:'/empresa'}" class="botonMenu">
          <i class="bi bi-buildings"></i>
        </router-link>-->
        <router-link :to="{path:'/cuenta'}" class="botonMenu">
          <i class="bi bi-person-circle"></i>
        </router-link>    
        <router-link :to="{path:'/'}" class="botonMenu">
          <i class="bi bi-box-arrow-right"></i>
        </router-link>
    </div>
  </nav>
</template>

<style scoped>
nav{
  background-color: #12263A;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.icons{
  display: flex;
  align-items: center;
  gap: 15px;
  i{
    font-size: 30px;
    color: #06BCC1;
    cursor: pointer;
  }
  i:hover{
    color: white;
  }
}
</style>