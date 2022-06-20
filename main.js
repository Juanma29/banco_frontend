/*
Escribe un programa que declare 3 objetos de cada modelo de datos considerado: gestor, cliente, mensaje y transferencia. Los valores de las propiedades de los objetos pueden ser arbitrarios.
*/




//const gestoresJSON = JSON.stringify(gestores);
//console.log(gestoresJSON);
//console.log(gestoresJSON.length);

//const clientes = generarClientes();
//const cliente1 = clientes[0];
//const cliente1JSON = JSON.stringify(cliente1);
//console.log(cliente1JSON);

// todos los gestores
// console.log(gestores);

// primer gestor
// console.log(gestores[0]);


// console.log(gestor2);
// console.table(cliente2);

/*
    Realizar una petición a http://localhost:8085/ok y mostrar la respuesta por pantalla
*/

//las propiedades del objeto opciones son: url, metodo, body, cabeceras
/*const opciones = {
    url: 'https://localhost:8085/ok',
    metodo: 'GET'
};*/

//OTRO METODO DECLARANDO LA VARIABLE -SERVER-


// obtenerGestores(gestores => {
//     mostrarGestores(gestores);
// });

async function main() {
    const gestores = await obtenerGestores();
    mostrarGestores(gestores);
}

main();


// función ejecutable
// (async () => {
//     const gestores = await obtenerGestores();
//     mostrarGestores(gestores);
// })();