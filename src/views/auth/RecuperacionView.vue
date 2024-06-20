<script>


export default {
  data() {
    return {
      form: {
        email: ''
      }
    };
  },
  methods: {
    Login() {
      // Navega a la ruta de recuperación utilizando Vue Router
      this.$router.push('/');
    },
    validateEmail() {
      // Valida el correo electrónico
      //let inputEmail = this.form.email;
    }
  }
};
</script>

<template>
    <div class="container-login">
        <img src="../../assets/img/mastermind-lateral.png" alt="logo" class="logo-log">
        <div class="form-req">
            <h1>Recuperar cuenta</h1>
            <form class="form-logn" id="form-recup" @submit.prevent="validateEmail">
                <label for="mail"></label>
                <input class="inp-log" v-model="form.email" id="email" type="email" name="mail" placeholder="E-mail">
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