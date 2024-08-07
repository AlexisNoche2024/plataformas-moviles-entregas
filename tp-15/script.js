const url="https://pokeapi.co/api/v2/pokemon"
async function obtenerDatos() {
    let response= await fetch(url);
    let datos= await response.json();
    return datos.results;
}
async function mostrarDatos() {
    let personajes = await obtenerDatos();
    console.log(personajes);
    let ol = document.createElement('ol');

    personajes.forEach(pj => {
        let li = document.createElement('li');
        li.innerText = pj.name;
        ol.appendChild(li);
    });
    let contenedorMain= document.querySelector('main');
    contenedorMain.appendChild(ol);
}
mostrarDatos();
