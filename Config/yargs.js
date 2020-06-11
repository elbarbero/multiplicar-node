const options = {
    base: {
        demand: true, // si es o no un comando obligatorio
        alias: 'b'
      },
      limite: {
        alias: 'l',
        default: 10
      }
}

const argv = require('yargs')
              .command('listar', 'Imprime en consola la tabla de multiplicar', options)
              .command('crear', 'Genera un archivo con la tabla de multiplicar', options)
              .help()
              .argv;

module.exports = {
    argv: argv
}

/*const argv = require('yargs')
              .command('listar', 'Imprime en consola la tabla de multiplicar', {
                base: {
                  demand: true, // si es o no un comando obligatorio
                  alias: 'b'
                },
                limite: {
                  alias: 'l',
                  default: 10
                }
              })
              .command('crear', 'Genera un archivo con la tabla de multiplicar', {
                base: {
                  demand: true, // si es o no un comando obligatorio
                  alias: 'b'
                },
                limite: {
                  alias: 'l',
                  default: 10
                }
              })
              .help()
              .argv;*/