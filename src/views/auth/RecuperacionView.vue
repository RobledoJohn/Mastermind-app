<script>

import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    submit() {
        // Asegúrate de que los campos no estén vacíos
        if (this.email !== "") {
            axios.post('https://mastermind-api.vercel.app/api/api/auth', {
            //axios.post('http://127.0.0.1:8000/api/auth', {
                email: this.email
            })
            .then(response => {
                // Manejar la respuesta aquí
                const user = response.data;

                if (user && user.email === this.email){
                    // Navega a la ruta de recuperación utilizando Vue Router
                    alert("Correo de recuperacion enviado con éxito.");
                    this.$router.push('/');
                }


            })
            .catch(error => {
                // Manejar errores aquí
                console.error(error);
                alert("Correo no encontrado.");
            });
        } else {
            alert("Por favor, complete todos los campos.");
        }
    },
    Login() {
      // Navega a la ruta de recuperación utilizando Vue Router
      this.$router.push('/');
    }
  }
};
</script>

<template>
    <div class="container-login">
        <img src="../../assets/img/mastermind-lateral.png" alt="logo" class="logo-log">
        <div class="form-req">
            <h1>Recuperar cuenta</h1>
            <form class="form-logn" id="form-recup" @submit.prevent="submit">
                <label for="mail"></label>
                <input class="inp-log" id="email" type="email" v-model="email" placeholder="E-mail">
                <button class="btn-req" native-type="submit">Recuperar</button>
                <div class="reg-req">
                    <p>¿Recuerdas tu contraseña?</p>
                    <a class="rec-a" @click.prevent="Login">Iniciar sesión</a>
                </div>
            </form>
        </div>
    </div>
</template>

<style>
.rec-a{
    color: black;
    text-decoration: none;
    cursor: pointer;
}
</style>