//Callbacks
function saludar(nombre){
    alert('Bienvenido a nuestro sitio web ' + nombre);
}

function ingresar(callback){
    let nombre = prompt('Indique su nombre');
    callback(nombre);
}

ingresar(saludar);
