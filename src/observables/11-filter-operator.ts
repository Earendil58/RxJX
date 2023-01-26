import { filter, from, of, range } from 'rxjs';

// range(1,50).pipe(
//     filter( x => x%2 ===0 )
// )
// .subscribe(respPares => console.log(respPares));


// range(1,50).pipe(
//     filter( (value, index) => {
//         console.log('index', index);
//         return value%2 === 0
//     })
// )
// .subscribe(respPares => console.log(respPares));

interface Personaje {
    tipo: string;
    nombre: string
}


const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Menem'
    },
];

const personajesObservanble$ = from(personajes);

personajesObservanble$.pipe(
    filter( valorHeroe => valorHeroe.tipo === 'heroe')
).subscribe(resp => console.log(resp));