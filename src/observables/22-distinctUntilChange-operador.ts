import { distinctUntilChanged, from, of } from "rxjs";



// const numeros$ = of(1,1,'1',2,2,3,2,4,4,7,'7')

// numeros$.pipe(
//     distinctUntilChanged()
// )
// .subscribe(
//     console.log
// );




interface Personaje {
    nombre : string;
}


const personajes: Personaje[] = [
    {
        nombre: 'Menem'
    },
    {
        nombre: 'Menem'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Cavallo'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Menem'
    },
    {
        nombre: 'Dr. Cavallo'
    },
];

from(personajes).pipe(
    distinctUntilChanged( (ant, act) => ant.nombre === act.nombre)
).subscribe(
    console.log
);