let nombre = document.getElementById('nombre');
nombre.innerHTML = '';
let usuario = prompt('Indique su nombre');
nombre.innerHTML = `${usuario} ya puede registrar sus operaciones bancarias`;
let registrar = document.getElementById('registrar');
let listar = document.getElementById('listar');
let reiniciar = document.querySelector('#reiniciar');
let titulo = document.querySelector('#titulo');
let listado = document.querySelector('#listado');
let totalDepositos = document.querySelector('#totalDepositos');
let totalRetiros = document.querySelector('#totalRetiros');
let totalSaldo = document.querySelector('#totalSaldo');
let depositos = 0;
let retiros = 0;
let saldo = 0;
let operaciones = [];
let continuar = true;
let monto = 0;
//Funciones
function registrarOperaciones(){
    do {
        monto = Number(prompt('Indique monto de la operación - (Si es un retiro debe anteponer el signo  - )'));
        if(monto === 0){
            alert('El monto debe ser un valor mayor a cero');
            continue;
        }
        operaciones.push(monto);
        //console.log(operaciones);
        continuar = confirm('Desea continuar?');
    } while (continuar === true);
}

registrar.onclick = registrarOperaciones;

listar.addEventListener('click', function(){
    console.log(operaciones);
    titulo.innerHTML = '';
    titulo.innerHTML = 'Movimientos Bancarios';
    for(let i=0; i < operaciones.length; i++){
        if(operaciones[i] >0){
            listado.innerHTML += `<li style='color: green' >${operaciones[i]} </li>`;
            depositos = depositos + operaciones[i];
        }else{
            listado.innerHTML += `<li style='color: red' >${operaciones[i]} </li>`;
            retiros = retiros + operaciones[i];
        }
    }
    saldo = depositos + retiros;
    totalDepositos.innerHTML = ` Total depositos: $ ${depositos} `;
    totalRetiros.innerHTML = `Total retiros: $ ${retiros}`;
    totalSaldo.innerHTML = `Saldo: $ ${saldo}`;
})

reiniciar.addEventListener('click', function(){
    window.location.href = 'index.html';
})