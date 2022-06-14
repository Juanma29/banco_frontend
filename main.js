/*
Escribe un programa que declare 3 objetos de cada modelo de datos considerado: gestor, cliente, mensaje y transferencia. Los valores de las propiedades de los objetos pueden ser arbitrarios.
*/

function generarGestores(){


const gestor1 = {
    id: 1,
    usuario: 'gestor1',
    password: 'gestor1',
    correo: 'gestor1@mail.com'
};

const gestor2 = {
    id: 2,
    usuario: 'gestor2',
    password: 'gestor2',
    correo: 'gestor2@mail.com'
};


const gestores = [gestor1, gestor2,  {
    id: 3,
    usuario: 'gestor3',
    password: 'gestor3',
    correo: 'gestor3@mail.com'
}];
    return gestores;
}

function generarClientes(){

const cliente1 = {
    id: 1,
    id_gestor: 1,
    usuario: 'usuario1',
    password: 'usuario1',
    correo: 'usuario1@mail.com',
    saldo: 9500
};

const cliente2 = {
    id: 2,
    id_gestor: 2,
    usuario: 'usuario2',
    password: 'usuario2',
    correo: 'usuario2@mail.com',
    saldo: 5000
};

const clientes = [cliente1, cliente2];  
    clientes.push({
        id: 3,
        id_gestor: 1,
        usuario: 'cliente3',
        password: 'cliente3',
        correo: 'cliente3@mail.com',
        saldo: 1230
    });
    
    return clientes;
}

function mostrarGestor(gestor) {
    console.log(`id: ${gestor.id}`);
    console.log(`usuario: ${gestor.usuario}`);
    console.log(`password: ${gestor.password}`);
    console.log(`correo: ${gestor.correo}`);
    console.log('-----');
}

function mostrarGestores(gestores) {

    // gestores es un array
    // gestor es un objeto con las propiedades: id, usuario, password, correo
    console.log('--- GESTORES ---')
    for (const gestor of gestores) {
        mostrarGestor(gestor);
    }
}

function mostrarCliente(cliente){
    console.log(`id: ${cliente.id}`);
    console.log(`usuario: ${cliente.usuario}`);
    console.log(`password: ${cliente.password}`);
    console.log(`correo: ${cliente.correo}`);
    console.log(`saldo: ${cliente.saldo}`);
    console.log('-----');
}

function mostrarClientes(clientes){
    console.log('--- CLIENTES ---')
    for (const cliente of clientes) {
        mostrarCliente(cliente);
    }
}


const gestoresJSON = JSON.stringify(gestores);
console.log(gestoresJSON);
console.log(gestoresJSON.length);

const clientes = generarClientes();
const cliente1 = clientes[0];
const cliente1JSON = JSON.stringify(cliente1);
console.log(cliente1JSON);

// todos los gestores
// console.log(gestores);

// primer gestor
// console.log(gestores[0]);


// console.log(gestor2);
// console.table(cliente2);