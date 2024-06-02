<template>
  <nav>
    <img class="d-inline-block mx-2" src="../assets/mastermind-lateral-w.png" alt="Logo" height="50">
    <div class="icons">        
        <i class="bi bi-buildings"></i>
        <i class="bi bi-person-circle"></i>
        <i class="bi bi-box-arrow-right"></i>
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