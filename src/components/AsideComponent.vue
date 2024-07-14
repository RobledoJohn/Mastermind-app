

<template>
    <aside class="asidewebapp">
        <div class="logotipo" >
            <img  alt="logotipo">
        </div>
        <ul class="botonesList">
            <router-link :to="{path:'/ordenes'}" class="botonMenu">
                <li class="boton">
                <i class="bi bi-list-check"></i>Ordenes</li>
            </router-link>
            <router-link :to="{path:'/inventario'}" class="botonMenu">
                <li class="boton">
                <i class="bi bi-box-seam"></i>Inventario</li>
            </router-link>
            <router-link :to="{path:'/ventas'}" class="botonMenu">
                <li class="boton">
                <i class="bi bi-wallet2"></i>Ventas</li>
            </router-link>
            <router-link :to="{path:'/clientes'}" class="botonMenu">
                <li class="boton">
                <i class="bi bi-person"></i>Clientes</li>
            </router-link>
            <router-link :to="{path:'/tecnicos'}" class="botonMenu">
                <li class="boton">
                <i class="bi bi-person-rolodex"></i>Técnicos</li>
            </router-link>
            <router-link :to="{path:'/misEquipos'}" class="botonMenu">
                <li class="boton">
                <i class="bi bi-display"></i>Mis Equipos</li>
            </router-link>
        </ul>
    </aside>
</template>

<style scoped>
.asidewebapp{
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 250px;
}
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
.icono{
    font-size: 20px;
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
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    list-style: none;
    color: black;
    
}
.boton{
        display: flex;
        align-items: center;
        i{
            margin-right: 10px;
            font-size: 20px;
        }
    }
.botonMenu:hover{
    background-color: #06BCC1;
}
</style>