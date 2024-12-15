//Estructura do..while
//Tabla de multiplicar
let salir = false;
do {
    let numeroTabla = Number(prompt('Indique el número de tabla deseada (1 al 10'));
    if(numeroTabla <=0 || numeroTabla >10){
        alert('Debe seleccionar tabla del 1 al 10');
        continue;
    }  
    for(let i=1 ; i <=10; i++){
        console.log(numeroTabla +' * '+ i + ' = '+ (numeroTabla * i));
    }
    salir = confirm('Desea salir?');
}while(salir === false);
alert('Gracias por utilizar nuestra aplicación');
