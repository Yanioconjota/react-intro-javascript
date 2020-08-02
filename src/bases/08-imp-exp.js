//import heroes, {owners} from '../data/heroes';
import heroes from '../data/heroes';
//Heroes es la exportación por defecto
//Owners es un export adicional que se obtiene desestructurando el archivo heroes.js

// const getHeroeById = (id) => {
//   return heroes.find((heroe) => {
//     return heroe.id === id
//   });
// }

export const getHeroeById = id => heroes.find(heroe => heroe.id === id);

// console.table(getHeroeById(1));

export const getHeroeByOwner = owner => heroes.filter(heroe => heroe.owner === owner);

// console.table(getHeroeByOwner('Marvel'));
// console.table(owners);