const activo = true;

let mensaje = '';
if (activo) {
  mensaje = 'activo';
} else {
  mensaje = 'inactivo';
}

const mensaje2 = (activo) ? 'activo' : 'inactivo';
const mensaje3 = (activo) ? 'activo' : null;
const mensaje4 = activo && 'activo';

console.log(`este es un if: ${mensaje}`);
console.log(`este es un if ternario: ${mensaje2}`);
console.log(`este es otro if ternario: ${mensaje3}`);
console.log(`este es un if ternario corto: ${mensaje4}`);