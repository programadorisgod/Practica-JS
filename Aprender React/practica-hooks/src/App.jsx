import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);

  const handleClick = (valor ) => {
    if (valor === "increase") {
      setContador(contador + 1);
    }

    if (valor === "decrease") {
      setContador(contador - 1);
    }
    if (valor === "restar") setContador(0);
  };

  const isEven = contador % 2 === 0;
  const message = isEven ? "Es par " : "Es impar";

  /*En el onClick lo que debo pasarle es una funcion, no una ejecucion que es function(), Pero tambien puedo crear una y pasarle un parametro, para poder cambiar el estado. Entoces creo una funcion flecha y retorno es la funcion con un parametro para saber que hara*/

  return (
    <>
      <p>CONTADOR</p>
      <h1>{contador}</h1>
      <small>{message}</small>
      <button onClick={() => handleClick("increase")}> increase </button>
      <button onClick={() => handleClick("decrease")}> decrease </button>
      <button onClick={() => handleClick("restar")}> restar </button>
    </>
  );
}

export default App;
