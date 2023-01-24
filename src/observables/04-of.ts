import { of } from 'rxjs';

// const obs$ = of(10,20,30);
// const obs$ = of(...[1,2,3,4,5,6,7],8,9,10);
const obs$ = of( [1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true));

console.log('Inicio')

obs$.subscribe( 
    {next: next => console.log(next),
    error: error => console.log(error),
    complete: () => console.log('fin de la secuencia')}
);

console.log('fin de la ejecucion')






