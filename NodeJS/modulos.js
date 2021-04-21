let path = require('path');
let util = require('util');
let v8 = require('v8');

console.log(path.basename(__filename));
console.log(path.join(__dirname,'wwww','img'));

util.log("Hola");
let nombre = "fran";
let texto = util.format("Hola %s", nombre);


console.log(texto);
console.log(v8.getHeapStatistics())