function mostrarGestor(gestor) {
    console.log(`id: ${gestor.id}`);
    console.log(`usuario: ${gestor.usuario}`);
    console.log(`password: ${gestor.password}`);
    console.log(`correo: ${gestor.correo}`);
    console.log('-----');
}

export function mostrarGestores(gestores) {

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