document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-login");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    try {
      const response = await fetch(
        "http://localhost/backend-movies/login.php",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Respuesta del servidor:", data);
        alert("Login exitoso");
      } else {
        console.error("Error en la solicitud:", response.statusText);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }

    form.reset();
  });
});
