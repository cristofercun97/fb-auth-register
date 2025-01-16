<template>
    <section>
      <!-- Si el usuario está autenticado, muestra su correo electrónico -->
      <h1 v-if="userName">Bienvenido {{ userName }}</h1>
      <!-- Si no, muestra "Cargando..." -->
      <h1 v-else> Cargando...</h1>
      <!-- Botón para cerrar sesión -->
      <button @click="logout">Cerrar Sesión</button>
    </section>
  </template>
  
  <script>
  // Importa las funciones necesarias de Firebase
  import { auth } from "@/db/firebase"; // Asegúrate de usar esta instancia si es necesario
  import { signOut } from "firebase/auth"; // Corrige la importación a 'signOut'
  
  // Definición del componente
  export default {
    name: 'PerfilView',
    data() {
      return {
        userName: null, // Almacena el nombre de usuario
      };
    },
    mounted() {
      // Obtiene el usuario autenticado desde Firebase
      const currentUser = auth.currentUser;
      if (currentUser) {
        this.userName = currentUser.email; // Asigna el correo electrónico del usuario al estado
      } else {
        this.$router.push({ name: 'register' }); // Redirige al registro si no hay usuario autenticado
      }
    },
    methods: {
      // Método para cerrar sesión
      async logout() {
        try {
          await signOut(auth); // Llama a la función signOut de Firebase
          this.$router.push({ name: 'register' }); // Redirige a la página de registro
        } catch (error) {
          console.error("Error al cerrar sesión:", error.message);
          alert(error.message); // Muestra el error si falla el cierre de sesión
        }
      },
    },
  };
  </script>
  