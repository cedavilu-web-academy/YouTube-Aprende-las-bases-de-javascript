//Funciones expresadas - Por expresión

let sumar = function(valor1,valor2=80){
     //console.log(valor2);
     if(valor2 === undefined){
          return 'Debe especificar almenos dos números';
     }
     return valor1 + valor2;
}

//Invocar la función
let resultado = sumar(2);
console.log(resultado);




