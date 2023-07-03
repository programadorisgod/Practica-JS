let pagina = 1;
const contenedor = document.getElementById("contenedor");
const btnAnterion = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

btnSiguiente.addEventListener("click", () => {
  if (pagina < 1000) pagina += 1;
  cargarPeliculas();
});

btnAnterion.addEventListener("click", () => {
  if (pagina > 1) pagina -= 1;
  cargarPeliculas();
});

const cargarPeliculas = async () => {
  try {
    //Direccion a la cuela hare la peticion.
    const respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=e7ede1e156bc8ce128ced62b38978944&page=${pagina}`
    );

    if (respuesta.status === 200) {
      //ahora accedamos a la informacion
      let peliculas = "";
      const data = await respuesta.json();
      data.results.forEach((pelicula) => {
        peliculas += `
              <div class="pelicula">
              <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"/>
              <h3 class"titulo">${pelicula.title}</h3>
              </div>
            
            `;
      });
      contenedor.innerHTML = peliculas;
    }

    if (respuesta.status === 401) {
      console.log("La API key, no es correcta");

    }
    if (respuesta.status === 404) {
      console.log("The movie not found 404");

    }
    if (respuesta.status === 400) {
      console.log("Lo sentimos, hubo un error");

    }


  } catch (error) {
    console.log(error);
  }
};

cargarPeliculas();
