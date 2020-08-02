//Desestructuración de Arrays
//Para obtener el tercer elemento del array, Como en el ejemplo, debemos agregar comas para indicarle a nuestra constante que los preimeros elementos los ignore
const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = personajes;
console.log(p3);

const retornaArreglo = () => {
  return ['ABC',123];
}

const [letras, numeros] = retornaArreglo();
//En este caso al destructurar obtenemos el valor de cada posición en su respectivo formato
console.log(letras, numeros);

const useState = (valor) => {
  return [valor, ()=>{console.log(`Hola, ${valor}!`)}];
}

const arr = useState('Goku');

const [nombre, setNombre] = arr;

console.log(nombre);
setNombre();