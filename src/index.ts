import { Observable, Subject } from 'rxjs'
import { Observer } from 'rxjs/internal/types';

const observer: Observer<number> = {
    next: value => console.log('next: ', value),
    error: error => console.log('error: ', error),
    complete: () => console.info('Completado')
};

const intervalo = new Observable<number>( subs => {

    const IntervalId = setInterval( () => {
        subs.next(Math.random())
    },1000)

    return () => {
        clearInterval( IntervalId );
        console.log('Intervalo Destruido');
    }



});

const subject$ = new Subject<number>();

const subscription = intervalo.subscribe( subject$ );

// const subs1 = intervalo.subscribe( resp => console.log('subs 1: ',resp));
// const subs2 = intervalo.subscribe( resp => console.log('subs 2: ',resp));

const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );


setTimeout( () => {

    subject$.next(10);

    subject$.complete();

    subscription.unsubscribe();

},3500)


