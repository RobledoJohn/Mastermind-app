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
        if (this.email !== "" && this.password !== "") {
            axios.get('https://mastermind-api.vercel.app/api/api/auth', {
            //axios.post('http://127.0.0.1:8000/api/auth', {
                email: this.email,
                password: this.password
            })
            .then(response => {
                // Manejar la respuesta aquí
                const user = response.data;

                if (user && user.email === this.email) {
                    if(user.clave === this.password){
                        this.$router.push('/home');
                    }else{
                        alert("Contraseña incorrecta.");
                    }
                } else {
                    alert("Usuario incorrecto.");
                }


            })
            .catch(error => {
                // Manejar errores aquí
                console.error(error);
                alert("Credenciales no válidas.");
            });
        } else {
            alert("Por favor, complete todos los campos.");
        }
    },
    Registro() {
      // Navega a la ruta de recuperación utilizando Vue Router
      this.$router.push('/registro');
    },
    Recuperacion() {
      // Navega a la ruta de recuperación utilizando Vue Router
      this.$router.push('/recuperacion');
    }
  }
};
</script>

<template>
   <div class="container-login">
        <img src="../../assets/img/mastermind-lateral.png" alt="logo" class="logo-log">
        <div class="form-login">
            <h1>Iniciar sesión</h1>
            <form class="form-logn" @submit.prevent="submit" id="form-login">
                <label for="user"></label>
                <input class="inp-log" id="email" type="email" v-model="email" placeholder="E-mail">
                <label for="pass"></label>
                <input class="inp-log" id="password" type="password" v-model="password" placeholder="Contraseña">
                <button class="btn-log" id="botonLog" native-type="submit">Iniciar Sesión</button>
                <a class="forgot" @click.prevent="Recuperacion">¿Olvidé mi contraseña?</a>
                <div class="reg-log">
                    <p>¿Eres un usuario nuevo?</p>
                    <a class="regis-log" @click.prevent="Registro">Registrarse</a>
                </div>
            </form>
        </div>
    </div>
</template>

<style>

.forgot, .regis-log{
    text-decoration: none;
    color: white;
    cursor: pointer;
}
/* DESKTOP*/
@media screen and (min-width: 1024px) {
    
    /*LOGIN*/
    
    a, ul{
        list-style: none;
        text-decoration: none;
        font-weight: bolder;
        color: #12263A;
    }

    .container-login{
        text-align: center;
        background-image: url("../../assets/img/background-login.jpg");
        background-size: cover; /* Ajusta el tamaño de la imagen para que cubra todo el fondo */
        background-repeat: no-repeat; /* Evita que la imagen se repita */
        background-attachment: fixed; /* Fija la imagen de fondo para que no se desplace con el contenido */
        min-height: 100vh; /*toma todo el largo de la pagina*/
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .logo-log{
        width: 250px;
        margin-bottom: 50px;
    }

    .form-parts{
        display: flex;
    }

    .form-login{
        width: 400px;
        height: 400px;
        background-color: #06BCC1;
        border: 3px #12263A solid;
        border-radius: 20px;
    }

    .form-regis{
        width: 600px;
        height: 400px;
        background-color: #12263A;
        border: 3px #06BCC1 solid;
        border-radius: 20px;
        padding-bottom: 10px;
    }
    .form-req{
        width: 400px;
        height: 280px;
        background-color: transparent;
        backdrop-filter: blur(20px);
        border: 3px #12263A solid;
        border-radius: 20px;
    }
    .form-logn{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .form-login h1{
        font-size: x-large;
        font-weight: bolder;
        color: #12263A;
        margin: 40px 0 30px 0;
    }

    .form-regis h1{
        font-size: x-large;
        font-weight: bolder;
        color: #ffffff;
        margin: 30px 0 20px 0;
    }

    .form-req h1{
        font-size: x-large;
        font-weight: bolder;
        color: #12263A;
        margin: 30px 0 20px 0;
    }

    .inp-log, .inp-reg{
        width: 250px;
        height: 30px;
        margin: 10px 0;
        padding: 3px;
        border-radius: 4px;
    }

    .inp-log{
        border: 3px #12263A solid;
    }

    .inp-reg{
        border: 3px #06BCC1 solid;
    }

    .forgot{
        margin: 10px 0;
        font-size: 12px;
    }

    .btn-log{
        background-color: #12263A;
        margin: 30px 0 40px 0;
    }
    .btn-log:hover, .btn-reg:hover{
        background-color: #C5D8D1;
        color: #12263A;
    }

    .btn-reg{
        background-color: #06BCC1;
        margin: 20px 0 20px 0;
    }

    .btn-req{
        background-color: #12263A;
        margin: 20px 0 20px 0;
    }
    .btn-req:hover{
        background-color: #06BCC1;
    }

    .btn-log, .btn-reg, .btn-req{
        width: 120px;
        height: 35px;
        color: white;
        font-size: medium;
        border-radius: 5px;
    }

    .reg-log, .reg-reg, .reg-req{
        display: flex;
        justify-content: center;
        margin: 10px 0;
    }

    .reg-log p, .reg-log a,
    .reg-reg p, .reg-reg a,
    .reg-req p, .reg-req a{
        width: fit-content;
        padding: 0 2px;
        font-size: 12px;
    }

    .reg-log a, .reg-reg p{
        color: white;
    }

    .select-reg{
        height: 30px;
        width: 260px;
    }
}
/* TABLET*/
@media screen and (min-width: 767px) and (max-width: 1024px) {
        
    
    a, ul{
        list-style: none;
        text-decoration: none;
        font-weight: bolder;
        color: #12263A;
    }
    /*LOGIN*/

    .container-login{
        text-align: center;
        background-image: url("../../assets/img/background-login.jpg");
        background-size: cover; /* Ajusta el tamaño de la imagen para que cubra todo el fondo */
        background-repeat: no-repeat; /* Evita que la imagen se repita */
        background-attachment: fixed; /* Fija la imagen de fondo para que no se desplace con el contenido */
        min-height: 100vh; /*toma todo el largo de la pagina*/
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .logo-log{
        width: 250px;
        margin-bottom: 50px;
    }

    .form-parts{
        display: flex;
    }

    .form-login{
        width: 400px;
        height: 400px;
        background-color: #06BCC1;
        border: 3px #12263A solid;
        border-radius: 20px;
    }

    .form-regis{
        width: 600px;
        height: 400px;
        background-color: #12263A;
        border: 3px #06BCC1 solid;
        border-radius: 20px;
    }
    .form-req{
        width: 400px;
        height: 280px;
        background-color: transparent;
        backdrop-filter: blur(20px);
        border: 3px #12263A solid;
        border-radius: 20px;
    }
    .form-logn{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .form-login h1{
        font-size: x-large;
        font-weight: bolder;
        color: #12263A;
        margin: 40px 0 30px 0;
    }

    .form-regis h1{
        font-size: x-large;
        font-weight: bolder;
        color: #ffffff;
        margin: 30px 0 20px 0;
    }

    .form-req h1{
        font-size: x-large;
        font-weight: bolder;
        color: #12263A;
        margin: 30px 0 20px 0;
    }

    .inp-log, .inp-reg{
        width: 250px;
        height: 30px;
        margin: 10px 0;
        padding: 3px;
        border-radius: 4px;
    }

    .inp-log{
        border: 3px #12263A solid;
    }

    .inp-reg{
        border: 3px #06BCC1 solid;
    }

    .forgot{
        margin: 10px 0;
        font-size: 12px;
    }

    .btn-log{
        background-color: #12263A;
        margin: 30px 0 40px 0;
    }
    .btn-log:hover, .btn-reg:hover{
        background-color: #C5D8D1;
        color: #12263A;
    }

    .btn-reg{
        background-color: #06BCC1;
        margin: 20px 0 20px 0;
    }

    .btn-req{
        background-color: #12263A;
        margin: 20px 0 20px 0;
    }
    .btn-req:hover{
        background-color: #06BCC1;
    }

    .btn-log, .btn-reg, .btn-req{
        width: 120px;
        height: 35px;
        color: white;
        font-size: medium;
        border-radius: 5px;
    }

    .reg-log, .reg-reg, .reg-req{
        display: flex;
        justify-content: center;
        margin: 10px 0;
    }

    .reg-log p, .reg-log a,
    .reg-reg p, .reg-reg a,
    .reg-req p, .reg-req a{
        width: fit-content;
        padding: 0 2px;
        font-size: 12px;
    }

    .reg-log a, .reg-reg p{
        color: white;
    }

    .reg-reg a, .reg-req a{
        color: #06BCC1;
    }

    .select-reg{
        height: 30px;
        width: 260px;
    }
}
/* SMARTPHONE*/
@media screen and (max-width: 767px) {
        
    a, ul{
        list-style: none;
        text-decoration: none;
        font-weight: bolder;
        font-size: small;
        color: #12263A;
    }
    /*LOGIN*/

    .container-login{
        text-align: center;
        background-image: url("../../assets/img/background-login.jpg");
        background-size: cover; /* Ajusta el tamaño de la imagen para que cubra todo el fondo */
        background-repeat: no-repeat; /* Evita que la imagen se repita */
        background-attachment: fixed; /* Fija la imagen de fondo para que no se desplace con el contenido */
        min-height: 100vh; /*toma todo el largo de la pagina*/
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 5%;
    }

    .logo-log{
        width: 250px;
        margin-bottom: 20px;
    }

    .form-parts{
        display: flex;
        flex-direction: column;
    }

    .form-login{
        width: 300px;
        height: 400px;
        background-color: #06BCC1;
        border: 3px #12263A solid;
        border-radius: 20px;
    }

    .form-regis{
        width: 300px;
        height: 600px;
        background-color: #12263A;
        border: 3px #06BCC1 solid;
        border-radius: 20px;
    }
    .form-req{
        width: 300px;
        height: 280px;
        background-color: transparent;
        backdrop-filter: blur(20px);
        border: 3px #12263A solid;
        border-radius: 20px;
    }
    .form-logn{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .form-login h1{
        font-size: x-large;
        font-weight: bolder;
        color: #12263A;
        margin: 40px 0 30px 0;
    }

    .form-regis h1{
        font-size: x-large;
        font-weight: bolder;
        color: #ffffff;
        margin: 30px 0 20px 0;
    }

    .form-req h1{
        font-size: x-large;
        font-weight: bolder;
        color: #12263A;
        margin: 30px 0 20px 0;
    }

    .inp-log, .inp-reg{
        width: 250px;
        height: 30px;
        margin: 10px 0;
        padding: 3px;
        border-radius: 5px;
    }

    .inp-log{
        border: 3px #12263A solid;
    }

    .inp-reg{
        border: 3px #06BCC1 solid;
    }

    .forgot{
        margin: 10px 0;
        font-size: 12px;
    }

    .btn-log{
        background-color: #12263A;
        margin: 30px 0 40px 0;
    }
    .btn-log:hover, .btn-reg:hover{
        background-color: #C5D8D1;
        color: #12263A;
    }

    .btn-reg{
        background-color: #06BCC1;
        margin: 20px 0 20px 0;
    }

    .btn-req{
        background-color: #12263A;
        margin: 20px 0 20px 0;
    }
    .btn-req:hover{
        background-color: #06BCC1;
    }

    .btn-log, .btn-reg, .btn-req{
        width: 120px;
        height: 35px;
        color: white;
        font-size: medium;
        border-radius: 5px;
    }

    .reg-log, .reg-reg, .reg-req{
        display: flex;
        justify-content: center;
        margin: 10px 0;
    }

    .reg-log p, .reg-log a,
    .reg-reg p, .reg-reg a,
    .reg-req p, .reg-req a{
        width: fit-content;
        padding: 0 2px;
        font-size: 12px;
    }

    .reg-log a, .reg-reg p{
        color: white;
    }

    .reg-reg a, .reg-req a{
        color: #06BCC1;
    }

    .select-reg{
        height: 30px;
        width: 260px;
    }
}
</style>
