const fs = require('fs');

const readline = require('readline');


let i = readline.createInterface(process.stdin, process.stdout);



i.question('Nombre del archivo > ', (nombreArchivo)=>{

  let stream = fs.createWriteStream(`./${nombreArchivo}.txt`);

    i.question('Cuál es tu nombre? > ', (nombre)=>{

        stream.write(`Este dijo ${nombre} \n`);
        //fs.writeFileSync(`./${nombre}.txt`,`Este dijo ${nombre} \n`);
        process.stdout.write('Qué quieres decir? \n');
    
        i.on('line', (dicho)=>{
            if(dicho.trim() == 'salir'){
                stream.close();
                i.close();
            }else {
                //fs.appendFileSync(`./${nombre}.txt`, dicho.trim() + '\n' );
                stream.write(dicho.trim() + '\n');
            }
        });
    });

})


