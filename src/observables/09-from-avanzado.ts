import {of, from} from 'rxjs';

//! of = toma argumentos y genera una secuencia de valores

//! from = array , promise, iterable, observable

const observer = {
    next: val => console.log('next: ', val),
    complete: () => console.log('completado'),
};

const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

// for (let id of miIterable){
//     console.log(id);
// }

from( miIterable ).subscribe( observer );

// const source$ = of([1,2,3,4,5]);

// const source$ = from('Earendil');

const source$ = from( fetch('https://api.github.com/users/klerith') );

// source$.subscribe( async(resp) => {
    
//     const dataRespuesta = await resp.json();
//     console.log(dataRespuesta);
    
// })

// source$.subscribe( observer );