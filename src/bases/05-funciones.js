const saludar = nombre => `Hola, ${nombre}!!!`;

let showNombre = prompt('Escribe tu nombre');
console.log(saludar(showNombre));

const getUser = () => {
  return {
    user_id: 'stv177A',
    username: 'doc_strange'
  }
};

const getUser2 = () => ({
  user_id: 'stv177A',
  username: 'doc_strange'
});

//getUser2 es una forma simplificada de devolver un objeto, omitimos el return y las llaves "{}" que delimitan el cuerpo de la función encerrando el objeto que queremos devolver entre paréntesis. de esta forma indicamos que es un objeto y no el cuerpo de la función. Esto es devolver un objeto implícito.

//Ejercicio:
// 1. Convertir a arrow fonction
// 2. Tiene que retornar un objeto implícito
// 3. Hacer pruebas
function getUsuarioActivo(nombre) {
  return {
    user_id: 'asd123',
    username: nombre,
  }
};

const getUsuarioActivoImplicito = nombre => ({
  user_id: 'asd123',
  username: nombre,
})

const usuarioActivo = getUsuarioActivo(showNombre);
const usuarioActivoImplicito = getUsuarioActivoImplicito(showNombre);
console.log(getUser2());
console.log(usuarioActivo);
console.log(usuarioActivoImplicito);