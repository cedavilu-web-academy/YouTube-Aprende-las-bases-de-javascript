//Métodos de strings
//.slice() - rodaja
let mensaje = '     Yo amo a toda mi Familia      ';
console.log(mensaje.slice(-7));

//.length - largo
console.log(mensaje.length);

//.indexOf() - indice de
console.log(mensaje.indexOf('adoro'));

//.split - separar
console.log(mensaje.split(' '));

//.replace() - reemplazar
let nuevoMensaje = mensaje.replace('amo','estimo')
console.log(nuevoMensaje);
console.log(mensaje);

//.trim()  - podar
console.log(mensaje.trim());
