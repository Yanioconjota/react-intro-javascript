const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  residencia: {
    ciudad: 'New York',
    zip: 10166,
    direccion: '200 Park Avenue Manhattan, New York',
    latitud: 40.7533528,
    longitud: -73.9788555
  }
};

// console.log({persona}, ' En ES6');
//console.log({persona:persona})
//console.table(persona);
//Al imprimir entre llaves el objeto persona estamos imprimiendo un objeto llamado persona al que le asignamos el valor de nuesta variable persona, es como decir console.log({persona:persona})
const persona2 = {...persona};
persona2.nombre = 'Peter';
persona2.apellido = 'Parker';
persona2.edad = 19;

console.log(persona);
console.log(persona2);