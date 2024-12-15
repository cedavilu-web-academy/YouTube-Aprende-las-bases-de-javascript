//if anidado (if ... else if)
let valor1 = Number(prompt('Indicar valor 1'));
let valor2 = Number(prompt('Indicar valor 2'));
let operacion = prompt('Operación deseada ( +  - * / )');
let resultado;
if(operacion === '+'){
    resultado = valor1 + valor2;
}else if(operacion === '-'){
    resultado = valor1 - valor2;
}else if(operacion === '*'){
    resultado = valor1 * valor2;
}else{
    resultado = valor1 / valor2;
}
alert(valor1 +' '+ operacion +' '+ valor2+ ' = '+resultado);


