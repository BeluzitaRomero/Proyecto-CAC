document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-registro");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(
        "http://localhost/backend-movies/registro.php",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Respuesta del servidor:", data);
        alert("Usuario registrado");
      } else {
        console.error("Error en la solicitud:", response.statusText);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }

    form.reset();
  });
});
