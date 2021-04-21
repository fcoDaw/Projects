const fs = require('fs');


// renombrar síncrono

//fs.renameSync('prueba.txt', './config.txt');

// renombrar asíncrono

    /*fs.rename('./config.txt', './prueba.txt', (err) => {
        if(err) throw('El nombre ya existe');
        console.log('Nombre del archivo cambiado');
    })*/

// Mover archivo
    /*fs.rename('./prueba.txt', './src/prueba.txt', (err) => {
        if(err){
            throw(err);
        }
        console.log('Archivo fue movido exitosamente');
    });*/

// eliminar archivo

    fs.unlinkSync('./src/prueba.txt');
    console.log('Archivo eliminado');
