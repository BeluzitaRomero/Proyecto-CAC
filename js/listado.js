//nuestra api local - fijense de alojarlo igual en htdocs -
const API_URL =
  "https://proyecto-movies-cac.000webhostapp.com/crud/getPeliculas.php";
  //"http://localhost:80/proyecto-cac-backend-grupal-master/crud/getPeliculas.php";
// Pedimos películas desde API PHP
async function getPeliculas() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    displayMovies(data); // Llama a la función para mostrar las películas en el DOM
  } catch (error) {
    console.error("Error al obtener las películas:", error);
  }
}

// Funcion para mostrar las card de pelis
function displayMovies(movies) {
  console.log(movies); // Log movies data before the loop

  const container = document.getElementById("listado_container");

  movies.forEach((movie) => {
    const row = document.createElement('div');
    row.classList.add('row');
  
    const col1 = document.createElement('div');
    col1.classList.add('col-10', 'd-flex', 'align-items-center'); 
  
    const titulo = document.createElement('p');
    titulo.innerHTML = `<strong>${movie.titulo}</strong>`; 
  
    col1.appendChild(titulo);
  
    const col2 = document.createElement('div');
    col2.classList.add('col-2');
  
    const boton = document.createElement('button');
    boton.type = 'button';
    boton.classList.add('btn', 'btn-primary', 'my-2');
    boton.textContent = 'Modificar';
  
    boton.onclick = () => irAlDetalle(movie.id);
  
    col2.appendChild(boton);
  
    row.appendChild(col1);
    row.appendChild(col2);
  
    container.appendChild(row);
  });
}

function irAlDetalle(id) {
  window.location.href = `../pages/update-pelicula.html?id=${id}`;
  }


//Invocola función para obtener y mostrar las películas
getPeliculas();
