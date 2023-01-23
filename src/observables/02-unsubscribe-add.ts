import { Subscriber, Observable } from 'rxjs'
import { Observer } from 'rxjs/internal/types';

const observer: Observer<number> = {
    next: value => console.log('next: ', value),
    error: error => console.log('error: ', error),
    complete: () => console.info('Completado')
};

const intervalo$ = new Observable<number>( subscriber => {

    let contador = 0;

    const interval = setInterval( () => {
        contador++;
        subscriber.next(contador);
        console.log('csl',contador);
    }, 1000)

    setTimeout( () => {
        subscriber.complete();
    },2500)

    return () => {
        clearInterval(interval);
        console.log('Intervalo Destruido');
    }
});

// const subs = intervalo$.subscribe( resp => console.log(resp) );

const subs = intervalo$.subscribe( observer );
const subs2 = intervalo$.subscribe( observer );
const subs3 = intervalo$.subscribe( observer );

subs.add(subs2);
subs2.add(subs3);


setTimeout( () => {
    subs.unsubscribe();

    console.log('Completado Timeout');
    
},6000)









