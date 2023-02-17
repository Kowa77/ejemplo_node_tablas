const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
//const argv = require('yargs').argv;

const colors = require('colors');

console.clear();

//const [ , ,arg3 = 'base=5'] = proccess.argv;
//const[ , base= 5] = arg3.split('=');
// const base = 5;

//createArchivo( base )
    //.then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    //.catch( err => console.log( err ) );

crearArchivo( argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.rainbow) )
    .catch( err => console.log( err ) );


