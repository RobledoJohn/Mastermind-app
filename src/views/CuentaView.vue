<template>
    <div class="cuenta" >
        <div>
            <form class="p-3 d-flex gap-5">
                <div>
                    <div class="mb-3">
                        <label for="nombre" class="form-label">nombre</label>
                        <input type="text" class="form-control" id="nombre" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="nit" class="form-label">nit</label>
                        <input type="text" class="form-control" id="nit" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
                    </div>
                </div>
                <div>
                    <div class="mb-3">
                        <label for="clave" class="form-label">clave</label>
                        <input type="text" class="form-control" id="clave" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="direccion" class="form-label">direccion</label>
                        <input type="text" class="form-control" id="direccion" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="telefono" class="form-label">telefono</label>
                        <input type="tel" class="form-control" id="telefono" aria-describedby="emailHelp">
                    </div>
                </div>
            </form>
            <button class="btn btn-primary m-2">Guardar</button>
        </div>    
        <div>
            <input type="text">
        </div>
    </div>
</template>

<style>
.cuenta{
    display: flex;
    flex-direction: row;
    background-color: grey;
    align-items: center;
}
.imgCuenta{
    width: 600px;
}
</style>

<script>
import axios from 'axios';
export default{
    data(){
        return{
            nombre: '',
            nit: '',
            email: '',
            clave: '',
            direccion: '',
            telefono: ''
        }
    },
    methods:{
        async guardar(){
            const data = {
                nombre: this.nombre,
                nit: this.nit,
                email: this.email,
                clave: this.clave,
                direccion: this.direccion,
                telefono: this.telefono
            }
            const res = await axios.post('http://localhost:3000/cuenta', data);
            console.log(res);
        }
    }
}
</script>