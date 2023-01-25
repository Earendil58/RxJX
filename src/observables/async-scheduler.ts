import { asyncScheduler } from "rxjs";

const saludar = () => {console.log('hola mundo')};
const saludar2 = ({nombre, apellido}) => console.log(`hola ${ nombre } ${apellido}`);

// asyncScheduler.schedule( saludar, 4000 );

// asyncScheduler.schedule(saludar2, 2000, {nombre: 'carlos', apellido: 'menem'});

// asyncScheduler.schedule(saludar2.bind(this, 'José Manuel', 'Munoz'), 2000);

asyncScheduler.schedule( function(state){
    console.log('state', state);
}, 3000, 0);

