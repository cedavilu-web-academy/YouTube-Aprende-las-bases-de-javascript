//Métodos de los arrays
let colores = ['Rojo','Verde','Amarillo','Azul','Morado'];

//.push() - Agregar elementos al final del array
colores.push('Naranja')
console.log(colores);
//.pop() - Extraer el último elemento del array
let ultimoElemento = colores.pop();
console.log(colores);
console.log(ultimoElemento);

//.shift() - Quita elementos al principio del array
let primerElemento = colores.shift();
console.log(colores);
console.log(primerElemento);

//.unshift() - Agrega elementos al principio del array
colores.unshift(primerElemento);
console.log(colores);

//.Slice() - Devuelve una copia de una parte del array. El array original no se modifica
let coloresFavoritos = colores.slice(3);
console.log(colores);
console.log(coloresFavoritos);

