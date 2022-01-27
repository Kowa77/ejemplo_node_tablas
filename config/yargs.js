var colors = require('colors');

colors.setTheme({
    info: 'green',
  });

const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'.info
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'.info
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: false,
        describe: 'Limite maximo de la tabla'.info
    })
    .check((argv,options) =>{
        if( isNaN( argv.b ) ){
           throw 'La base tiene que ser un numero'.info
        }
        return true;
    })
    .argv;

module.exports = argv;