// const multiplicar = require('./multiplicar/multiplicar');
// console.log(multiplicar.crearArchivo);



//Destructuración
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
// const { argv } = require('./config/yargs');
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado. ${colors.green(archivo)}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}

//let base = '9';

// Por defeco se mandan dos argumentos, el path de node y el path del archivo
// console.log(process.argv);

// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(base);