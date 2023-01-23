import { Subscriber, Observable } from 'rxjs'
import { Observer } from 'rxjs/internal/types';

const observer: Observer<string> = {
    next: value => console.log('siguiente [observer]: ', value),
    error: error => console.log('error [observer]', error),
    complete: () => console.info('Completado')
}

const obs$ = new Observable<string>( subs => {

    subs.next('Hola');
    subs.next('Mundo');

    subs.next('hola');
    subs.next('Mundo');

    // //!FORZAR UN ERROR:
    // const a = undefined;
    // a.nombre = 'Menem';

    subs.complete();  //ninguna emision luego del COMPLETE va a ser notificada a los subscriptores

    subs.next('hola');
    subs.next('Mundo');
});

obs$.subscribe(observer);

// obs$.subscribe({ 
//     next: next => console.log('next: ', next),
//     error: error => console.warn('error: ', error),
//     complete: () => console.info('completado')
//     }
// )







