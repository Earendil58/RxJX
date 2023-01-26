import {filter, fromEvent, map } from 'rxjs';



const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map( event => event.code),
    filter( key => key === 'Enter')
)
.subscribe(console.log)

