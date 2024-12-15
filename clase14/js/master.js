//Modificando el DOM
let titulo = document.querySelector('#titulo');
console.log(titulo);
titulo.innerHTML = 'Bienvenidos a <em>Pet Shope</em>';
let destacado = document.querySelector('.destacado');
destacado.innerHTML += ' y el mejor servicio';
//let calidad = document.querySelector('#calidad');
document.querySelector('#calidad').innerHTML = 'Variedad y calidad';