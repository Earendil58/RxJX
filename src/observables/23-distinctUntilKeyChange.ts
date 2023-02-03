import { distinctUntilKeyChanged, from } from "rxjs";

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
    distinctUntilKeyChanged( 'nombre' )
).subscribe(
    console.log
);