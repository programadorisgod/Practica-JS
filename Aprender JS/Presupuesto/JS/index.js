const Agregar = document.getElementById('agregarDato');
const INGRESOS = [
  new Ingreso("Pago", 2000),
  new Ingreso("Venta Celuco", 4000),
  new Ingreso("Venta Celuco", 4005),
  new Ingreso("Venta Juego", 600),
];

const EGRESO = [new Egreso("Pago recibo", 9000), new Egreso("Pago xbox", 9000)];

const cargarCabecera = () => {
  let presupuesto = totalIngreso() + totalEgreso();
  let porcentaje = totalEgreso() / totalIngreso();
  let egresos = totalEgreso();
  let ingresos = totalIngreso();
  document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
  document.getElementById("porcentaje").innerHTML =
    formatoPorcentaje(porcentaje);
  document.getElementById("ingresos").innerHTML = formatoMoneda(ingresos);
  document.getElementById("egresos").innerHTML = formatoMoneda(egresos);
};

const cargar = () => {
  cargarCabecera();
  CargarIngreso();
  CargarEgreso();
};

let totalIngreso = () => {
  let totalIngreso = 0;
  for (let i of INGRESOS) {
    totalIngreso += i._valor;
  }

  return totalIngreso;
};

let totalEgreso = () => {
  let totalEgreso = 0;
  for (const iterator of EGRESO) {
    totalEgreso += iterator._valor;
  }
  return totalEgreso;
};

const formatoMoneda = (valor) => {
  return valor.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
};

const formatoPorcentaje = (valor) => {
  return valor.toLocaleString("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
  });
};

document.getElementById("body").onload = cargar;

const CargarIngreso = () => {
  let IngresosHTML = "";
  for (const ingreso of INGRESOS) {
    IngresosHTML += crearIngresoHTML(ingreso);
  }

  document.getElementById("lista-ingresos").innerHTML = IngresosHTML;
};

const crearIngresoHTML = (ingreso) => {
  let IngresosHTML = `  <div class="elemento limpiarEstilos">
  <div class="elemento_descripcion">${ingreso._descripcion}</div>
  <div class="derecha limpiarEstilos">
    <div class="elemento_valor">${formatoMoneda(ingreso._valor)}</div>
    <div class="elemento_eliminar">
      <button class="elemento_eliminar--btn">
        <ion-icon name="close-circle-outline"
       onclick = "eliminarIngreso(${ingreso._id})"></ion-icon>
      </button>
    </div>
  </div>
</div>`;
  return IngresosHTML;
};

const eliminarIngreso = (id) => {
  let indice = INGRESOS.findIndex((ingreso) => ingreso._id === id);
  INGRESOS.splice(indice, 1);
  console.log(indice);
  console.log(INGRESOS);
  cargarCabecera();
  CargarIngreso();
};

const CargarEgreso = () => {
  let EgresoHTML = "";
  for (const egreso of EGRESO) {
    EgresoHTML += crearEgresoHTML(egreso);
  }
  document.getElementById("lista-egresos").innerHTML = EgresoHTML;
};

const crearEgresoHTML = (egreso) => {
  let EgresoHTML = `  <div class="elemento limpiarEstilos">
  <div class="elemento_descripcion">${egreso._descripcion}</div>
  <div class="derecha limpiarEstilos">
    <div class="elemento_valor">-${formatoMoneda(egreso._valor)}</div>
    <div class="elemento_porcentaje">${formatoMoneda(egreso._valor / totalEgreso()  )}</div>
    <div class="elemento_eliminar">
      <button class="elemento_eliminar--btn">
        <ion-icon  onclick = "eliminarEgreso(${
          egreso._id
        })" name="close-circle-outline"></ion-icon>
      </button>
    </div>
  </div>
</div>`;
  return EgresoHTML;
};

const eliminarEgreso = (id) => {
  let indice = EGRESO.findIndex((egreso) => egreso);
  EGRESO.splice(indice, 1);
  cargarCabecera();
  CargarEgreso();
};

Agregar.addEventListener('click', () => {
  agregarDato();
})

const agregarDato = () => {
  let formulario = document.forms["forma"];
  let tipo = forma["tipo"];
  let descripcion = forma["descripcion"];
  let valor = forma["valor"];

  if (descripcion.value !== "" && valor.value !== "") {
    if (tipo.value === "ingreso") {
      INGRESOS.push(new Ingreso(descripcion.value, Number(valor.value)));
      cargarCabecera();
      CargarIngreso();
    } else if (tipo.value === "egreso") {
      EGRESO.push(new Egreso(descripcion.value, Number(valor.value)));
      cargarCabecera();
      CargarEgreso();
    }
  }
};



