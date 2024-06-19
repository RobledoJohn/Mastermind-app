<template>
    <div class="container-login">
        <img src="../../assets/img/mastermind-lateral.png" alt="logo" class="logo-log">
        <div class="form-regis">
            <h1>Registrarse</h1>
            <form class="form-reg" action="" id="form-reg">
                <div class="form-parts">
                    <div class="part1">
                        <label for="name"></label>
                        <input class="inp-reg" id="name" type="text" name="name" placeholder="Nombre de la empresa">
                        <label for="dni"></label>
                        <select class="inp-reg select-reg" id="dni" name="dni">
                            <option value="0">Seleccione</option>
                            <option value="1">NIT</option>
                            <option value="2">C.C</option>
                            <option value="3">C.E</option>
                        </select>
                        <label for="email"></label>
                        <input class="inp-reg" id="" type="email" name="email" placeholder="E-mail">
                        <label for="pass"></label>
                        <input class="inp-reg" id="pass" type="password" name="pass" placeholder="Contraseña">
                    </div>
                    <div class="part2">
                        <label for="dir"></label>
                        <input class="inp-reg" id="dir" type="text" name="dir" placeholder="Dirección">
                        <label for="numid"></label>
                        <input class="inp-reg" id="numid" type="text" name="numid" placeholder="Numero de identificación">
                        <label for="mail"></label>
                        <input class="inp-reg" id="mail" type="email" name="mail" placeholder="Confirmar E-mail">
                        <label for="passw"></label>
                        <input class="inp-reg" id="passw" type="password" name="passw" placeholder="Confirmar Contraseña">    
                    </div>
                </div>
                <button class="btn-reg" type="submit">Registrarse</button>
                <div class="reg-reg">
                    <p>¿Ya tienes una cuenta?</p>
                    <a class="reg-a" @click.prevent="Login">Iniciar sesión</a>
                </div>
            </form>
        </div>
    </div>
 </template>

 
<script>
export default {
  data() {
    return {
      email: '',
      password: ''
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
.reg-a{
    color: #06BCC1;
    text-decoration: none;
    cursor: pointer;
}
</style>