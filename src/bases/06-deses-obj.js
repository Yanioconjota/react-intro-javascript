// Desestructuración
// Asignación desestructurante => https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment

const persona = {
  nombre: 'Tony Stark',
  edad: 45,
  clave: 'Ironman',
};

const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

// const retornaPersona = usuario => console.log(usuario);

const useContext = ({clave, nombre, edad, rango = 'Director de Shield'}) => {
  //console.log(nombre, edad, rango)
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 40.7533528,
      lng: -73.9788555
    }
}
};


//retornaPersona(persona);
const {nombreClave, anios, latlng: {lat, lng}} = useContext(persona);
console.log(`Nombre clave: ${nombreClave}, Edad: ${anios}, Ubicación: ${lat}, ${lng}`);