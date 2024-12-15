window.onload = function(){
    let titulo = document.getElementById('titulo');
    let registro = document.getElementById('registro');
    let listado = document.querySelector('#listado');
    let nombre = document.querySelector('#nombre');
    let tituloListado = document.querySelector('#tituloListado');
    let reporte = document.getElementById('reporte');
    let totalDepositos = document.getElementById('totalDepositos');
    let totalRetiros = document.getElementById('totalRetiros');
    let totalSaldo = document.getElementById('totalSaldo');
    let reiniciar = document.getElementById('reiniciar');
    let operaciones = [];
    let continuar = true;
    let monto;
    let depositos=0;
    let retiros=0;
    let saldo=0;
    nombre.innerHTML = '';
    tituloListado.innerHTML = '';
    let usuario = prompt('Indique su nombre');
    nombre.innerHTML = `${usuario} ya puede registrar sus operaciones bancarias`
    //Funciones
    function registrar(){
        do {

            monto = Number(prompt('Monto de la operación - Si va a registrar un retiro coloque el signo menos antes del valor'));
            if(monto === 0 ){
                alert('Debe especicar un valor numerico superior a cero');
                continue;
            }
            operaciones.push(monto);
            continuar = confirm('Desea continuar?');
        } while (continuar== true);
    }

    //Eventos
    registro.onclick = registrar;
    
    listado.addEventListener('click', function(){
       
        tituloListado.innerHTML = 'Movimientos Bancarios';
        for(let i = 0; i < operaciones.length; i++){
            if(operaciones[i]>0 ){
                depositos = depositos + operaciones[i];
                reporte.innerHTML += `<li style= 'color: green'>$ ${operaciones[i]}</li>`;
            }else{
                retiros = retiros + operaciones[i];
                reporte.innerHTML += `<li style= 'color: red'>$ ${operaciones[i]}</li>`;
            }
        }
        saldo = depositos + retiros;
        totalDepositos.innerHTML = 'Total depositos: $'+ depositos;
        totalRetiros.innerHTML = 'Total de retiros: $' + retiros;
        totalSaldo.innerHTML =  'Saldo actual: $' + saldo;
    })

    reiniciar.addEventListener('click', function(){
        window.location.href = 'index.html';
    })

}
