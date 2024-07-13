<script>

import axios from 'axios';

export default {
  data() {
    return {
      form: {
        nombre: '',
        telefono: '',
        email: '',
        clave: '',
        direccion: '',
        nit: ''
      }
    };
  },
  methods: {
    Login() {
      // Navega a la ruta de recuperación utilizando Vue Router
      this.$router.push('/');
    }, 
    submit() {
      // Envía los datos del formulario al servidor
      
      axios.post('https://mastermind-api.vercel.app/api/api/empresas', this.form)
      
        .then(response => {
          // Manejar la respuesta aquí
          console.log(response);
          alert('Empresa registrada con éxito');
          this.$router.push('/');
        })

        //si se genera error
        .catch(error => {
          // Manejar errores aquí
          if (error.response && error.response.data && error.response.data.errores) {
            let errores = error.response.data.errores;
            let mensajes = [];

            // Recorre cada campo con errores y agrega los mensajes a la lista
            Object.keys(errores).forEach(campo => {
              errores[campo].forEach(mensaje => {
                mensajes.push(`${campo}: ${mensaje}`);
              });
            });

            // Muestra todos los mensajes de error concatenados
            alert('Errores:\n' + mensajes.join('\n'));
          } else {
            // Muestra un mensaje de error genérico si no se puede obtener información detallada
            alert('Error al registrar la empresa');}
        });
    }
  }
};
</script>

<template>
    <div class="container-login">
        <img src="../../assets/img/mastermind-lateral.png" alt="logo" class="logo-log">
        <div class="form-regis">
            <h1>Registrarse</h1>
            
            <form class="form-reg" @submit.prevent="submit" id="form-reg">
                <div class="form-parts">
                    <div class="part1">
                        <label for="name"></label>
                        <input class="inp-reg" v-model="form.nombre" id="name" type="text" name="name" placeholder="Nombre de la empresa">
                        <label for="phone"></label>
                        <input class="inp-reg" v-model="form.telefono" id="" type="phone" name="number" placeholder="Telefono">
                        <label for="email"></label>
                        <input class="inp-reg" v-model="form.email" id="" type="email" name="email" placeholder="E-mail">
                    </div>
                    <div class="part2">
                        <label for="dir"></label>
                        <input class="inp-reg" v-model="form.direccion" id="dir" type="text" name="dir" placeholder="Dirección">
                        <label for="numid"></label>
                        <input class="inp-reg" v-model="form.nit" id="numid" type="text" name="numid" placeholder="Nit">
                        <label for="pass"></label>
                        <input class="inp-reg" v-model="form.clave" id="pass" type="password" name="pass" placeholder="Contraseña">   
                    </div>
                </div>
                <button class="btn-reg" native-type="submit">Registrarse</button>
                <div class="reg-reg">
                    <p>¿Ya tienes una cuenta?</p>
                    <a class="reg-a" @click.prevent="Login">Iniciar sesión</a>
                </div>
            </form>
        </div>
    </div>
 </template>

<style>
.reg-a{
    color: #06BCC1;
    text-decoration: none;
    cursor: pointer;
}
</style>