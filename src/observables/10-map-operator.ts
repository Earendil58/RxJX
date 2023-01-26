import { fromEvent, map, range } from "rxjs";


// range(1,5).pipe(
//     map<number, string>(val => {
//         return (val*10).toString();
//     })
// )
// .subscribe( console.log );

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

keyup$.pipe(
    map( val => val.key)
)
.subscribe(console.log)




