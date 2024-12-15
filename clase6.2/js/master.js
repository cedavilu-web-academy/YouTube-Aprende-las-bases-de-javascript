//Funciones declaradas - Declarativas - Por declaración
//Invocamos la función
let mensaje =  saludar('Luis','luis@gmail.com');
console.log(mensaje);
alert(mensaje);



function saludar(nombre,correo){
     return ('Bienvenido ' + nombre + ' su correo es ' + correo);
}


