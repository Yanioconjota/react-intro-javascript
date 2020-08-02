import {getHeroeById} from './bases/08-imp-exp';

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroeById(2);
//     resolve(heroe);
//     //reject('No se pudo encontrar el héroe');
//   }, 1000);
// });

// promesa.then((heroe) => {
//   console.log('heroe:', heroe);
// })
// .catch(err => console.warn(err));

const getHeroeByIdAsync = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe !== undefined) {
        resolve(heroe);
      } else {
        reject('No se pudo encontrar el héroe');
      }
    }, 1000 );
  });
}

// getHeroeByIdAsync(6)
//   .then( heroe => console.log('Heroe', heroe))
//   .catch(err => console.warn(err));

getHeroeByIdAsync(2)
  .then(console.log)
  .catch(console.warn);

//Esta es la forma simplificada de escribir los respectivos consoles, el then recibe por defecto el primer argumento del resolve y el catch el enviado por el reject.