<template>
    <h1 style="color: red;">SERVICIOS NO SALEN EN DB</h1>
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
                    <th>SKU</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Categoria</th>
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