const argv = require('./Config/yargs').argv;
const colors = require('colors');

const { f_CrearArchivo, f_listarTabla, f_crearArchivo_ConLimite } = require('./Multiplicar/multiplicar');

let comando = argv._[0];

switch(comando) {
  case 'listar':
    console.log('======================================='.green);
    console.log(`=============Tabla del ${argv.base}=============`.green);
    console.log('======================================='.green);
    console.log(f_listarTabla(argv.base, argv.limite));
  break;
  
  case 'crear':
    f_crearArchivo_ConLimite(argv.base, argv.limite)
      .then(archivo => console.log(`Archivo creado: ${archivo}`))
      .catch(e => console.log(e));
    /*f_CrearArchivo(argv.base)
      .then(archivo => console.log(`Archivo creado: ${archivo}`))
      .catch(e => console.log(e));*/
    break;
  
  default:
    console.log('Comando no reconocido');
}

//let base = 6;

/*let argv2 = process.argv;
let parametro = argv2[2];
console.log(argv);
console.log('base: ', argv.base);
console.log('limite: ', argv.limite);
console.log(argv2);*/

//let base = parametro.split('=')[1];
//console.log(base);

/*console.log(module);
console.log('**************************************');
console.log(process.argv);*/