function actualizarNavegacion() {
  const user = JSON.parse(localStorage.getItem("user"));
  const nav = document.querySelector("nav .navbar-nav");

  //se agregan varias condiciones para evitar errores de querer acceder a elementos
  //que todavia no estan en el DOM cuando se ejecuta el session.js
  if (user) {
    // Ocultar enlaces de "Iniciar sesión" y "Registrarse"
    const loginLink = document.getElementById("login");
    const registerLink = document.getElementById("registrarse");
    if (loginLink) loginLink.style.display = "none";
    if (registerLink) registerLink.style.display = "none";

    // Mostrar enlace de "Cerrar sesión"
    const cerrarSesionLink = document.createElement("li");
    cerrarSesionLink.classList.add("nav-item");
    cerrarSesionLink.innerHTML =
      '<a class="nav-link text-white" href="#" id="cerrar-sesion">Cerrar sesión</a>';
    nav.appendChild(cerrarSesionLink);

    // Mostrar enlace de "Agregar" si el usuario es admin
    const addMovieLink = document.getElementById("admin");
    if (user.rol === "admin") {
      if (addMovieLink) addMovieLink.style.display = "block";
    } else {
      if (addMovieLink) addMovieLink.style.display = "none";
    }

    // Agregar evento para "Cerrar sesión"
    document.getElementById("cerrar-sesion").addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("user");
      window.location.href = `http://localhost/final/cac-front/index.html`;
    });
  } else {
    // Asegurarse de que los enlaces se muestren para usuarios no autenticados si existen
    const loginLink = document.getElementById("login");
    const registerLink = document.getElementById("registrarse");

    const addMovieLink = document.getElementById("admin");
    if (loginLink) loginLink.style.display = "block";
    if (registerLink) registerLink.style.display = "block";
    if (addMovieLink) addMovieLink.style.display = "none";
  }
}
document.addEventListener("DOMContentLoaded", actualizarNavegacion);
