<script>
import { debounce } from 'lodash';

export default {
  data() {
    return {
      documentoCliente: '',
      clienteEncontrado: null
    };
  },
  methods: {
    close() {
      this.$emit('close');
    },
    buscarCliente: debounce(async function() {
      const user = JSON.parse(localStorage.getItem('auth')); // Asegúrate de que el formato es correcto

      if (this.documentoCliente.length >= 10) {
        try {
          const response = await fetch(`http://127.0.0.1:8000/api/${user.id}/clientes/${this.documentoCliente}`);
          const data = await response.json();
          if (data.length > 0) {
            this.clienteEncontrado = data[0]; // Asignar el primer cliente del array
          } else {
            this.limpiarDatos();
          }
        } catch (error) {
          console.error('Error al consultar el cliente:', error);
          this.limpiarDatos();
        }
      } else {
        this.limpiarDatos();
      }
    }, 300),
    limpiarDatos() {
      this.clienteEncontrado = null;
    }
  }
}
</script>


<template>
    <div class="popUp">
        <button class="close" @click="close">X</button>
        <div class="d-block">
        <h1 class="tittle-orden">Crear Orden</h1>
        <form>
          <div class="selector mb-3">
            <label for="buscarCli">No. Identificación: </label>
            <input class="form-control" type="text" id="buscarCli" v-model="documentoCliente" @input="buscarCliente">
            <div class="btn-clienteNuevo" v-if="!clienteEncontrado">
                <a href="/clientes">Crear Cliente</a>
            </div>
          </div>
          <div v-if="clienteEncontrado">
            <div class="selector mb-3">
                <label for="opcionesCli">Cliente: </label>
                <input class="form-control" type="text" id="opcionesCli" :value="clienteEncontrado.nombre" disabled>
            </div>
            <div class="selector mb-3">
                <label for="opcionesEquip">Equipo: </label>
                <select class="form-select" id="opcionesEquip">
                <option value="1">Seleccione una opción</option>
                <!-- Opciones de equipo aquí -->
                </select>
            </div>
            <div class="botonOrdenPopUp">
                <button class="btn" type="submit">Crear Orden</button>
            </div>
          </div>
        </form>
      </div>
    </div>
</template>
  

<style>
.popUp {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: fit-content;
  padding: 10px;
  background-color: rgb(255, 255, 255);
  border-radius: 15px;
  box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.close {
  position: absolute;
  top: 10px;
  right: 20px;
  padding: 2px 10px;
  background-color: transparent;
  color: #12263A;
  border: none;
  font-size: 20px;
  cursor: pointer;
  border-radius: 25px;
}

.close:hover{
    color: red;
}

.tittle-orden {
  text-align: center;
  margin: 15px;
  font-size: xx-large;
}

.selector {
    display: flex;
    flex-direction: column;
    justify-content: center;
    label {
        font-size: large;
        color: #167A9A;
    }
}

.btn-clienteNuevo {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0 0 0;
    a{
        color: #ffffff;
        font-size: medium;
        font-weight: normal;
        text-decoration: none;
        padding: 10px;
        background-color: #12263A;
        border-radius: 10px;
    }
}

.btn-clienteNuevo:hover{
    a{
        background-color: #06BCC1;
        color: #12263A;
    }
}

.botonOrdenPopUp {
  width: 100%;
  display: flex;
  justify-content: space-around;
  
  .btn {
    color: #ffffff;
    background-color: #12263A;
  }
  
  .btn-alert {
    color: #ffffff;
    background-color: rgb(158, 9, 9);
  }
  
  .btn:hover {
    color: #12263A;
    background-color: #06BCC1;
  }
  
  .btn-alert:hover {
    color: #ffffff;
    background-color: orangered;
  }
}
</style>
