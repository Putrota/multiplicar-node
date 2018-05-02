const { contar } = require('./contar/contar.js');

let argv = process.argv;
let parametro = argv[2];
let cuenta = parametro.split('=')[1];

contar(cuenta).then(
    (resp => console.log(resp))
).catch((err) => console.log(err));

console.log(process.argv);