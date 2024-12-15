//Sentencia switch
let fruta = prompt('Indique que fruta le gusta');
switch (fruta) {
    case 'pera':
        alert('Veo que te gusta la pera');    
        break;
    case 'manzana':
        alert('Veo que te gusta la manzana');
        break;
    case 'durazno':
        alert('Veo que te gusta el durazno');
        break;
    case 'mango':
        alert('Veo que te gusta el mango');
        break;        
    default:
        alert('Veo que no te gustan las frutas');
        break;
}