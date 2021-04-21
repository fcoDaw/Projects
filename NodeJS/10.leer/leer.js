let fs = require('fs');

//let files = fs.readdirSync('./');

fs.readdir('./', (error,files) =>{
    
    if(error){
        throw error;
    }
    console.log(files);

    //let archivo = fs.readFileSync('./archivo.txt','utf-8');
    
    fs.readFile('./archivo.txt','UTF-8',(error, archivo)=>{
        if(error){
            throw error;
        }
        console.log(archivo);
    })
    console.log("Contenido del archivo...");
    
});

