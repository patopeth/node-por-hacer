const descripcion = {
    demand: true,
    alias: 'd'
}

const completado = {
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra un registro', {
        descripcion
    })
    .command('listar', 'Lista los registros', {
        completado
    })
    .help()
    .argv;


module.exports = {
    argv
}