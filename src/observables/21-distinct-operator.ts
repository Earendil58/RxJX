import { distinct, from, of } from "rxjs";


// const numeros =  of(1,1,'1',3,2,2,4,5,3,0);

// numeros.pipe(
//     distinct() //! ===
// ).subscribe(console.log);


interface Personaje {
    nombre : string;
}


const personajes: Personaje[] = [
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
        nombre: 'Dr. Cavallo'
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
    distinct( p => p.nombre)
).subscribe(
    console.log
)