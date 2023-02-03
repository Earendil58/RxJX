import { range, takeWhile, fromEvent, map } from 'rxjs';


// range(1,10).pipe(
//     takeWhile( x => x < 7)
// ).subscribe(resp => console.log(resp));


const click$ = fromEvent<MouseEvent>( document, 'click');

click$.pipe(
    map(({x, y}) => ({x, y})),
    takeWhile( ({y}) => y <= 150, true)
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('se completo'),
})


