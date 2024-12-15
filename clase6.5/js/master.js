//Scope o ámbito de la variable
let valor1 = 5000;
function dividir(){
    let valor1 = 100;
    let valor2 = 2;
    console.log('Dentro de la función');
    console.log(valor1);
    return valor1 / valor2;
}

//Invicamos la función
dividir();
console.log('Fuera de la función');
console.log(valor1);


