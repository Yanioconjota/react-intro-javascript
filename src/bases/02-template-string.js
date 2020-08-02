const nombre = 'Bruce';
const apellido = 'Wayne';
const heroe = 'Batman';
//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido} es ${heroe}`;
console.log(nombreCompleto);
//Imprime Bruce Wayne es Batman

let getSaludo = (nombre) => {
  return `Hola ${nombre}`;
  //Es lo mismo que return 'Hola ' + nombre;
}

console.log(`Esto es un saludo con salto de línea:
${getSaludo(nombre)}!
`);