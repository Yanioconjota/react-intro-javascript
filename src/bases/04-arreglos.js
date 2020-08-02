//const arreglo = new Array(100);
const arreglo = [1,2,3,4];
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);

let arreglo2 = [...arreglo,5];
//arreglo2.push(5);

const arreglo3 = arreglo2.map(item=>{
  return `${item} * 2 = ${item * 2}`;
});

//Recuerda que para que arreglo 3 imprima en consola debe retornar algo, en este caso el "item" que recibe el callback de map, de lo contrario imprimirá undefined por cada elemento encontrado.

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);