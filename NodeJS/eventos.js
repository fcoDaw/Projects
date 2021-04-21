const eventEmitter = require('events').EventEmitter;
const util = require('util');

let persona = function(nombre){
    this.nombre = nombre;
}

util.inherits(persona,eventEmitter);
let person = new persona('Fran');

person.on('hablar',(mensaje) => {
    console.log(`${person.nombre}: ${mensaje}`);
})

person.emit('hablar',"hoy es un gran dia");
/*emitter.on('eventoCustom',(mensaje,status)=> {

    console.log(`${status}: ${mensaje}`);
});

emitter.emit('eventoCustom', 'Mensaje cargado con éxito',200);*/