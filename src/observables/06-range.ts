import { asyncScheduler, of, range } from "rxjs";

const src$ = range(1,5, asyncScheduler);

console.log('Inicio');
src$.subscribe( value => console.log(value))
console.log('Fin');