<template>
     <section>
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="loginUser">
        <div>
          <label for="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            placeholder="Introduzca su correo electrónico"
          />
        </div>
  
        <div>
          <label for="password">Contraseña</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            placeholder="Introduzca su contraseña"
          />
        </div>
  
        <button type="submit">Iniciar Sesión</button>
        <span>¿ya tienes una cuenta? <router-link to="/">Registrate</router-link></span>
      </form>
    </section>
</template> 

<script>
import { auth } from "@/db/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
export default {
    name: 'LoginView',
    data(){
        return{
            email: " ",
            password: " ",
        }
    },
    methods:{
        async loginUser(){
            try{
                await signInWithEmailAndPassword(auth, this.email, this.password)
                this.$router.push('/perfil')
            } catch (error){
                alert('Error al iniciar Sesión')
            }
        }
    }
}
</script>

<style>

</style>