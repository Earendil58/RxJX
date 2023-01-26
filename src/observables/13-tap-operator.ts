import { map, range, tap } from "rxjs";



const numero$ = range(1,10);

numero$.pipe(
    tap(x => {
        console.log('antes', x)
    }),
    map( val => val * 10),
    tap( {
        next: valor => console.log('despues', valor),
        complete: () => console.log('se completo')
    } )
)
.subscribe(valor => console.log('subscribe',valor));