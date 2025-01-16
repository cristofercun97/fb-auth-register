<template>
    <section>
      <h2>Registro de Usuarios</h2>
      <form @submit.prevent="registerUser">
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
  
        <button type="submit">Registrarse</button>
      </form>
    </section>
  </template>
  
  <script>
  import { auth } from "@/db/firebase"; // Importa la instancia de Firebase Authentication
  import { createUserWithEmailAndPassword } from "firebase/auth"; // Importa la función para crear usuarios
  
  export default {
    name: "RegisterView",
    data() {
      return {
        email: "", // Variable vinculada al campo de correo electrónico
        password: "", // Variable vinculada al campo de contraseña
      };
    },
    methods: {
      async registerUser() {
        // Método que se ejecuta al enviar el formulario
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            this.email,
            this.password
          ); // Registra al usuario en Firebase
          const user = userCredential.user; // Obtiene la información del usuario creado
          console.log("Usuario creado:", user);
          this.$router.push({ name: "perfil", params: { userName: user.email } }); // Redirige al perfil
        } catch (error) {
          console.error("Error al registrar al usuario:", error.message); // Muestra el error en la consola
          alert(error.message); // Muestra el error al usuario
        }
      },
    },
  };
  </script>
  