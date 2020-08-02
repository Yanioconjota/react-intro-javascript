import {heroes} from './data/heroes';

// const getHeroeById = (id) => {
//   return heroes.find((heroe) => {
//     return heroe.id === id
//   });
// }

const getHeroeById = id => heroes.find(heroe => heroe.id === id);

console.table(getHeroeById(1));

const getHeroeByOwner = owner => heroes.filter(heroe => heroe.owner === owner);

console.table(getHeroeByOwner('Marvel'));