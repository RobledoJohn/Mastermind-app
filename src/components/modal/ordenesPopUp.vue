<script>
export default{
    data(){
        return{
            
        }
    }, 
    methods:{
        
    }
}
</script>

<template>
    <div class="popUp">
        <div class="d-block">
            <h1 class="tittle-orden">Crear Orden</h1>
            <form>
                <div class="selector mb-3">
                    <label for="opcionesCli">Cliente: </label>
                    <select class="form-select" id="opcionesCli">
                        <option value="1">Seleccione una opcion</option>
                    </select>
                    <a href="/clientes">Crear Cliente</a>
                </div>
                <div class="selector mb-3">
                    <label for="opcionesEquip">Equipo: </label>
                    <select class="form-select" id="opcionesEquip">
                        <option value="1">Seleccione una opcion</option>
                    </select>
                </div>
                <div class="selector mb-3">
                    <label for="opcionesTec">Tecnico: </label>
                    <select class="form-select" id="opcionesTec">
                        <option value="1">Sin Asignar</option>
                    </select>
                </div>
            </form>
            <div class="botonOrden">
                <button class="btn" type="submit">Crear Orden</button>
            </div>
        </div> 
    </div>
</template>

<style>

.popUp{
    position: absolute;
    width: 30%;
    height: 60%;
    background-color: rgb(255, 255, 255);
    border-radius: 15px;
    box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.5);    
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
        
}
.tittle-orden{
    text-align: center;
    margin: 15px;

}
.selector{
    label{
        font-size: large;
        color: #167A9A;
    }
    a{
        color: grey;
        font-size: small;
    }
}
.botonOrden{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    .btn{
        color: #ffffff;
        background-color: #12263A;
    }
    .btn:hover{
        color: #12263A;
        background-color: #06BCC1;
    }
}

</style>