import { from, scan, map } from 'rxjs';

interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    {id: 'carlos', autenticado: false, token: null},
    {id: 'carlos', autenticado: true, token: 'ABC'},
    {id: 'carlos', autenticado: true, token: 'ABC123'},
];

const state$ = from( user ).pipe(
    scan<Usuario, Usuario>( (acc, curr) => {
        return {...acc, ...curr}
    }, {edad: 33})
);

const id$ = state$.pipe(
    map( state => state.id)
)
.subscribe(console.log)

