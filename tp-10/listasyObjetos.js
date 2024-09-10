var listaPersonasEjemplo = [
    {
        "apellido": "Perez",
        "nombre": "Juan",
        "edad": 20,
        "documento": 12345
    },
    {
        "apellido": "Lopez",
        "nombre": "Luis",
        "edad": 20,
        "documento": 23456
    },
    {
        "apellido": "Zapata",
        "nombre": "Pablo",
        "edad": 10,
        "documento": 34567
    },
    {
        "apellido": "Acuña",
        "nombre": "Ana",
        "edad": 30,
        "documento": 45678
    },
];

/**
 * 01 - ordenarPorApellido
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`.
 * 
 * Retorna: 
 * - el mismo listado, ordenado alfabéticamente por el apellido de la persona 
 */
function ordenarPorApellido(listaDePersonas) {
    return listaDePersonas.sort(function (a,b){
            if (a.apellido < b.apellido) {
              return -1;
            }
            else if (a.apellido > b.apellido) {
              return 1;
            }
            return 0;
          })
          
    }
console.log("ordenarPorApellido()", ordenarPorApellido(listaPersonasEjemplo));

/**
 * 02 - soloNombres
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una lista de strings, con sólo los nombres de las personas
 */
function soloNombres(listaDePersonas) {
    let solo = []

    for(var i = 0; i < listaDePersonas.length; i++){
        solo.push(listaDePersonas[i].nombre)
    }
    return solo
}
console.log("soloNombres()", soloNombres(listaPersonasEjemplo));

/**
 * 03 - promedioEdades
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - un numero, con el cálculo del promedio de las edades
 */
function promedioEdades(listaDePersonas) {
    let s=0
    for(var i = 0; i < listaDePersonas.length; i ++){
        s = listaDePersonas[i].edad + s

    }
    return s/(listaDePersonas.length)
}
console.log("promedioEdades()", promedioEdades(listaPersonasEjemplo));

/**
 * 04 - soloMayoresDeEdad
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una lista, array, conteniendo solamente las personas con más de 18 años
 */
function soloMayoresDeEdad(listaDePersonas) {
    let mayor = []
    for(var i = 0; i < listaDePersonas.length; i ++){
        if(listaDePersonas[i].edad > 18){
            mayor.push(listaDePersonas[i])
        } 
    }
    return mayor
}
console.log("soloMayoresDeEdad()", soloMayoresDeEdad(listaPersonasEjemplo));

/**
 * 05 - laPersonaMayor
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una objeto con la persona de mayor edad en todo el listado. En caso de que hayan 2 personas con la misma edad, se puede retornar la primera que aparezca en el listado.
 */
function laPersonaMayor(listaDePersonas) {
    //for(var i = 0; i < listaDePersonas.length; i ++){
    let laPersonaMayors = listaDePersonas.reduce((previous, current) => {
            return current[1] > previous[1] ? current : previous;
          });
    //}
    /*
    previous hace referencia al valor acumulado de la iteración anterior.
    current hace referencia al valor actual de la iteración actual.

reduce(). Este método recibe una función como parámetro, la cual recibe dos parámetros: previous y current. 
El primero de ellos es el valor anterior, y el segundo es el valor actual.
 Para lograr este objetivo es necesario no pasar el valor inicial al método reduce().
*/    
    return laPersonaMayors
}
console.log("laPersonaMayor()", laPersonaMayor(listaPersonasEjemplo));
