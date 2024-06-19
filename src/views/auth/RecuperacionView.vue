<template>
    <div class="container-login">
        <img src="../../assets/img/mastermind-lateral.png" alt="logo" class="logo-log">
        <div class="form-req">
            <h1>Recuperar cuenta</h1>
            <form class="form-logn" action="" id="form-recup">
                <label for="mail"></label>
                <input class="inp-log" id="email" type="email" name="mail" placeholder="E-mail">
                <button class="btn-req" type="submit">Recuperar</button>
                <div class="reg-req">
                    <p>¿Recuerdas tu contraseña?</p>
                    <a class="rec-a" @click.prevent="Login">Iniciar sesión</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      email: ''
    };
  },
  methods: {
    Login() {
      // Navega a la ruta de recuperación utilizando Vue Router
      this.$router.push('/');
    }
  }
};
</script>
<style>
.rec-a{
    color: black;
    text-decoration: none;
    cursor: pointer;
}
</style>