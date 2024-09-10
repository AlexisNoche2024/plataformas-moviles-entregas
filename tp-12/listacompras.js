let lista_productos = document.querySelector("#lista-productos");

/**
 * agregarProducto()
 * esta función se va a llamar cuando el usuario envía el formulario con el nombre del producto para agregar.
 */

function ordenarAlfabeticamente() {
  const nodeList = document.querySelectorAll("li");
  const list = Array.from(nodeList);
  list.sort(function (a, b) {
    if (a.innerText.toLowerCase() < b.innerText.toLowerCase()) {
      return -1;
    } else if (a.innerText.toLowerCase() > b.innerText.toLowerCase());
    {
      return 1;
    }

    return 0;
  });

  console.log(list);
  limpiarLista();
  list.forEach((e) => {
    lista_productos.append(e);
  });
}

function limpiarLista() {
  const li = document.querySelectorAll("li");
  li.forEach((e) => {
    e.remove();
  });
}

function eliminarProducto(e) {
  e.target.parentNode.remove();
}

function agregarProducto(nombreProducto) {
  if (nombreProducto != "") {
    const nuevoLi = document.createElement("li");
    nuevoBoton = document.createElement("button");
    nuevoP = document.createElement("p");
    nuevoBoton.innerText = "x";
    nuevoP.innerText = nombreProducto;
    nuevoBoton.classList.add(
      "boton",
      "btn",
      "btn-outline-danger",
      "btn-sm",
      "m-1"
    );
    nuevoP.classList.add("d-inline", "fs-5");
    nuevoLi.appendChild(nuevoBoton);
    nuevoLi.appendChild(nuevoP);
    nuevoBoton.addEventListener("click", eliminarProducto);
    lista_productos.appendChild(nuevoLi);
  } else {
    alert("No hay producto que agregar");
  }
}

function handlerFormulario(e) {
  e.preventDefault();
  const input = e.target.querySelector("input");
  const nombreProducto = input.value;
  input.value = "";
  agregarProducto(nombreProducto);
}
document.querySelector("form").addEventListener("submit", handlerFormulario);
