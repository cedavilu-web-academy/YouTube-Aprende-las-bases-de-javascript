//Modificando el DOM
let titulo = document.querySelector('#titulo');
console.log(titulo);
titulo.innerHTML = 'Bienvenidos a <em>Pet Shop</em>';
let destacado = document.querySelector('.destacado');
destacado.innerHTML += ' y el mejor servicio';
//let calidad = document.querySelector('#calidad');
document.querySelector('#calidad').innerHTML = 'Variedad y calidad';
//Aplicando los estilos
titulo.style.color = 'white';
titulo.style.textAlign = 'center';
titulo.style.fontFamily = 'arial';
titulo.style.fontSize = '3rem'; 
titulo.style.backgroundColor = 'teal';
//Aplicando las clases
let body = document.querySelector('body');
body.classList.add('fondo');




