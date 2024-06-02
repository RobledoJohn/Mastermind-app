<template>
        <div class="logotipo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Samsung_logo_blue.png" alt="logotipo">
        </div>
        <ul class="botonesList">
            <li class="botonMenu" href="../views/HomeView.vue">
                <i class="bi bi-house"></i>Inicio</li>
            <li class="botonMenu">
                <i class="bi bi-list-check"></i>Ordenes</li>
            <li class="botonMenu">
                <i class="bi bi-box-seam"></i>Inventario</li>
            <li class="botonMenu">
                <i class="bi bi-truck"></i>Proveedores</li>
            <li class="botonMenu">
                <i class="bi bi-briefcase"></i>Servicios</li>
            <li class="botonMenu">
                <i class="bi bi-wallet2"></i>Ventas</li>
            <li class="botonMenu">
                <i class="bi bi-person"></i>Clientes</li>
            <li class="botonMenu">
                <i class="bi bi-person-rolodex"></i>Técnicos</li>
        </ul>
</template>
<style scoped>
.logotipo{
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid #d9d9d9 2px;
    border-radius: 5px;
    margin: 15px 10px 5px 10px;
    width: 90%;
    height: 120px;
    overflow: hidden;
    img{
        width: 90%;
        object-fit: cover;
    }
}
ul{
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
i{
    font-size: 20px;
    color: black;
}
.botonesList{
    gap: 10px;
    padding: 10px;
}
.botonMenu{
    background-color: #d9d9d9;
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    padding: 10px;
    gap: 5px;
    border: solid #d9d9d9 1px;
    border-radius: 5px;
    cursor: pointer;
}
.botonMenu:hover{
    background-color: #06BCC1;
}
</style>