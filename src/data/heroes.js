const heroes = [{
    id: 1,
    name: 'Batman',
    owner: 'DC'
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: 'Marvel'
  },
  {
    id: 3,
    name: 'Superman',
    owner: 'DC'
  },
  {
    id: 4,
    name: 'Flash',
    owner: 'DC'
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: 'Marvel'
  },
];

export const owners = ['DC', 'Marvel'];

export default heroes;


// export {
//   heroes as default,
//   owners
// }

//Heroes es la exportación por defecto
//Owners es un export adicional que se obtiene desestructurando el archivo heroes.js