const eventEmitter = require('events').EventEmitter;
const util = require('util');

let persona = function(nombre){
    this.nombre = nombre;
}

util.inherits(persona,eventEmitter);

module.exports = persona;