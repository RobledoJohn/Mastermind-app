<script>
import { debounce } from 'lodash';
import axios from 'axios';

export default {
  data() {
    return {
      documentoCliente: '',
      cliente: null,
      equipos: [], 
      response: null,
      formData:{
        id_cliente: null,
        id_equipo: null,
        id_tecnico: null,
        descripcion: null,
        enum_estado_reparacion: null,
        enlace_seguimiento: null
      }, 
      errorMsg: ""
    };
  },
  methods: {
    close() {
      this.$emit('close');
    },
    buscarCliente: debounce(async function() {
      const user = JSON.parse(localStorage.getItem('auth'));

      if (this.documentoCliente.length >= 10) {
        try {
          const data = await fetch(`https://mastermind-api.vercel.app/api/api/${user.id}/clientes/${this.documentoCliente}`);
          //const data = await fetch(`http://127.0.0.1:8000/api/${user.id}/clientes/${this.documentoCliente}`);
          const response = await data.json();

          if (response) {
            
            if (response.cliente != null) {
              this.cliente = response.cliente;

              if (response.equipos != null) {
                  this.equipos = response.equipos;
              }else{
                  alert('Equipos no encontrados');   
                  this.errorMsg = "Equipos no encontrados";
                  console.log(this.errorMsg);
              }
            }else{
              this.errorMsg = response.mensaje || "Cliente no encontrado";
              console.log(this.errorMsg);
              alert(this.errorMsg);
              this.limpiarDatos();
            }
            this.response = response;
            this.limpiarDatos();
          } else {
            this.errorMsg = "Cliente no encontrado";
            this.limpiarDatos();
          }
        } catch (error) {
          this.limpiarDatos();
          this.errorMsg ="Error al buscar el cliente";
        }
      } else {
        this.limpiarDatos();
      }
    }, 300),
    limpiarDatos() {
      this.cliente = null;
      this.equipos = [];
      this.errorMsg = "";
    },
    submit() {
        this.formData.id_cliente = this.cliente ? this.cliente.id : null;
        this.formData.id_tecnico = 0; //cambiar valor
        this.formData.id_equipo = parseInt(document.getElementById('opcionesEquip').value);
        this.formData.descripcion = document.getElementById('descripcion').value;
        this.formData.enum_estado_reparacion = 2; 
        this.formData.enlace_seguimiento = `https://mastermind-api.vercel.app/api/seguimiento/${this.formData.id_equipo}`;

        // Envío del formulario
        const user = JSON.parse(localStorage.getItem('auth'));
        //axios.post(`http://127.0.0.1:8000/api/${user.id}/ingresos`, this.formData)
        axios.post(`https://mastermind-api.vercel.app/api/api/${user.id}/ingresos`, this.formData)
            .then(response => {
            console.log('Datos creados:', response.data);
            alert("Orden creada con éxito");
            this.close();
            })
            .catch(error => {
            console.error('Error al enviar los datos:', error);
            console.log(this.formData);
            alert("Error al crear la orden");
            });
    }
  }
}
</script>


<template>
    <div class="popUp">
        <button class="close" @click="close"><i class="bi bi-x-square-fill"></i></button>
        <div class="d-block">
        <h1 class="tittle-orden">Crear Orden</h1>
        <form @submit.prevent="submit">
          <div class="selector mb-3">
            <label for="buscarCli">No. Identificación: </label>
            <input class="form-control" type="text" id="buscarCli" v-model="documentoCliente" @input="buscarCliente">
            <div class="btn-clienteNuevo" v-if="!cliente">
                <a :href="'/clientes'">Crear Cliente</a>
                <div v-if=errorMsg>
                    <p style="color:red">{{ errorMsg }}</p>
                </div>
            </div>
          </div>
          <div v-if="response">
            <div class="selector mb-3">
                <label for="opcionesCli">Cliente: </label>
                <input class="form-control" type="text" id="opcionesCli" :value="cliente.nombre" disabled>
            </div>
            <div class="selector">
                <label for="opcionesEquip">Equipo: </label>
                <select class="form-select" id="opcionesEquip" >
                    <option>Seleccione el equipo</option>
                    <option v-for="equipo in equipos" :key="equipo.id" :value="equipo.id">{{ equipo.modelos.nombre }}</option>
                </select>
            </div>
            <div class="selector mb-3 mt-1">
                <a :href="'/clientes/'+ cliente.id ">Nuevo equipo</a>
            </div>
            <div class="selector mb-3">
                <label for="descripcion">Descripción de daños: </label>
                <textarea class="form-control" name="descripcion" id="descripcion" cols="30" rows="5"></textarea>
            </div>
            <div class="botonOrdenPopUp">
                <button class="btn" native-type="submit">Crear Orden</button>
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
    a{
        color: #167A9A;
        font-size: small;
        font-weight: normal;
    }
    a:hover{
        color: #06BCC1;
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

.btn-clienteNuevo a:hover{
    background-color: #06BCC1;
    color: #12263A;
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
