<template>
    <div class="baseTable">
        <div class="buscadorContenedor">
            <input class="buscador" placeholder="Buscar">
        </div>
        <div class="botonOrden">
            <router-link :to="{path:'/creaItem'}">
                <button class="btn">Agregar</button>
            </router-link>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Documento</th>
                    <th>Telefono</th>
                    <th>Direccion</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
              
            </tbody>
        </table>
    </div>
    
</template>

<style>
</style>

<script>
</script>