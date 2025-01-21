// Importa las funciones necesarias de Vue Router
import { createRouter, createWebHistory } from 'vue-router';
// Asegúrate de importar el componente Perfil
import Perfil from "../views/PerfilView.vue";
// Importa la instancia de autenticación de Firebase para verificar el usuario autenticado

//imprtamos la vista Login
import Login from "../views/LoginView.vue"
import { auth } from "@/db/firebase";

// Define las rutas de la aplicación
const routes = [
  {
    // Ruta principal para el registro
    path: '/', // URL de la ruta
    name: 'register', // Nombre único para identificar la ruta
    component: () => import('../views/RegisterView.vue'), // Componente que se carga dinámicamente
  },
  {
    // Ruta para el perfil del usuario
    path: '/perfil', // URL de la ruta
    name: 'perfil', // Nombre único para identificar la ruta
    component: Perfil, // Componente asociado a esta ruta (asegúrate de importarlo arriba si no lo has hecho)
    meta: { requiresAuth: true }, // Indica que esta ruta requiere autenticación
  },

  {
    // Ruta del login del usuario 
    path: '/login', // URL de la ruta
    name: 'login', // Nombre único para identificar la ruta 
    component: Login, // Componente asociado a esta ruta
    meta: {requiresAutn: true }, // Indica que esta ruta requiere autenticación
  }
];

// Crea una instancia de Vue Router
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Define el modo de historial para URLs limpias
  routes, // Pasa las rutas definidas
});

// Middleware global para proteger rutas
router.beforeEach((to, from, next) => {
  // Obtén el usuario actual desde Firebase
  const currentUser = auth.currentUser;

  // Verifica si la ruta requiere autenticación y si el usuario no está autenticado
  if (to.matched.some(record => record.meta.requiresAuth) && !currentUser) {
    next({ name: "register" }); // Redirige al componente de registro si no hay usuario autenticado
  } else {
    next(); // Permite la navegación a la ruta solicitada si el usuario está autenticado
  }
});

// Exporta el router para que pueda ser utilizado en la aplicación principal
export default router;
