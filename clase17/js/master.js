//Modificando el DOM
let titulo = document.querySelector('#titulo');
console.log(titulo);
titulo.innerHTML = 'Bienvenidos a <em>Pet Shop</em>';

let destacado = document.querySelector('.destacado');

destacado.innerHTML += ' y el mejor servicio para su mascota';
destacado.style.fontFamily = 'Bebas Neue, cursive';
destacado.style.fontSize = '2rem';

//document.querySelector('#calidad').innerHTML = 'Seleccione el fondo de pantalla, en base a su mascota preferida' ;

let mascota = document.querySelector('#mascota');

mascota.innerHTML = 'Seleccione el fondo de pantalla, en base a su mascota preferida';
//Aplicando los estilos
titulo.style.color = 'white';
titulo.style.textAlign = 'center';
titulo.style.fontFamily = 'Bebas Neue, cursive';
titulo.style.fontSize = '3rem'; 
titulo.style.backgroundColor = 'rgba(0,0,0,0.5)';
titulo.style.padding = '15px'
//Aplicando las clases
let body = document.querySelector('body');
body.classList.add('fondo');
//Trabajando con eventos
let perro = document.getElementById('perro');
let gato = document.getElementById('gato');
let parrafo = document.querySelector('.parrafo');

perro.onclick = fondoPerro;

function fondoPerro(){
    body.classList.add('perro');
    body.classList.remove('gato');  //Debo remover la clase por si la tiene asignada
    parrafo.style.color = 'white';
    destacado.style.color = 'white';
    mascota.style.color = 'white';
}

gato.addEventListener('click', function(){
    body.classList.add('gato');
    body.classList.remove('perro'); //Debo remover la clase por si la tiene asignada
    parrafo.style.color = 'black';
    destacado.style.color = 'black';
    mascota.style.color = 'black';

});







