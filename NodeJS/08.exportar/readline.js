let readline = require('readline');
let util = require('util');
let rl = readline.createInterface(process.stdin,process.stdout);



let persona = {
    nombre: '',
    comentarios: []
}
rl.question('Cuás es tu nombre? ', (respuesta)=>{
    //console.log(`Hola, ${respuesta}` );
    persona.nombre = respuesta;
    rl.setPrompt('Dime un comentario: ');
    rl.prompt();
})

rl.on('line',(input) =>{
    if(input.trim() === 'salir'){
        let mensaje = util.format("Te llamas %s y esto me dijiste: %j", persona.nombre,persona.comentarios);
        console.log(mensaje);
        process.exit()
    }
    persona.comentarios.push(input.trim());
    rl.setPrompt('Dime un comentario: ');
    rl.prompt();
});