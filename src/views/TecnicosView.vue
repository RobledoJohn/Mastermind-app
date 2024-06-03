<template>
    <div class="baseTable">
        <div class="buscadorContenedor">
            <input class="buscador" placeholder="Buscar">
        </div>
        <div class="botonOrden">
            <router-link :to="{path:'/creaTecnico'}">
                <button class="btn">Agregar</button>
            </router-link>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Telefono</th>
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