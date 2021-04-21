const readline = require('readline');
const Messages = require('./message');
const Document = require('./document');
const Directory = require('./directory');
const { requestFilename, fileExists, replaceFile } = require('./message');


const dir = new Directory();

let interfz = readline.createInterface(process.stdin, process.stdout);

const tools = `Comandos: :q = salir, :sa = guardar como, :s = guardar
-----------------------------------------------------`;

const pantalla = `
                    ================
                    Editor de texto.\n
                    ================
                    Elige una opcion:\n
                    1 Crear nuevo documento
                    2 Abrir documento
                    3 Cerrar editor\n> `;

mainScreen();


function mainScreen(){
 
    interfz.question(pantalla, res =>{
        switch(res.trim()){
            case '1':
                createFile();
            break;

            case '2':
                openFileInterface();
            break;

            case '3':
                interfz.close();
            break;
            default:
                mainScreen();
        }

           
    });
}

function createFile(){
    let file = new Document(dir.getPath());

    renderInterface(file);
    readCommands(file);
}

// Cuando buscas un archivo si pones mal el nombre te devuelve a el inicio y si esta bien te lo edita
function openFileInterface(){
    let file = new Document(dir.getPath());
    dir.getFilesInDir();


    interfz.question(Messages.requestFileName, name => {
        if(file.exists(name)){
            openFile(file, name)
        }else {
            console.log(Messages.fileNotFound);
            setTimeout(()=>{
                interfz.removeAllListeners('line');
                mainScreen();
            },2000);
        }
    });
}

// Para obtener la información

function openFile(file,name){
    file.open(name);
    renderInterface(file);
    readCommands(file);
}

   //Limpia la pantalla
function renderInterface(file, mensaje){
    process.stdout.write('\033c');
    (file.getName() == '') ? console.log(`| Untitled |`) : console.log(`| ${file.getName()} |`);
    console.log(tools);

    if(mensaje != null){
        console.log(mensaje);
    } else{
        console.log(file.getContent());
    }

}

// Comandos del notepad

function readCommands(file){

    interfz.on('line', input =>{
        switch(input.trim()){
            case ':sa':
                saveas(file);
            break;

            case ':q':
                interfz.removeAllListeners('line');
                mainScreen();
            break;

            case ':s':
                save(file);
            break;
            default:
                file.append(input.trim());
        }
    });
}


function saveas(file){
    interfz.question(Messages.requestFileName, name =>{
        if(file.exists(name)){
            console.log(Messages.fileExists);
            interfz.question(Messages.replaceFile, confirm => {
                if(confirm = 'y'){
                    file.saveas(name);
                    renderInterface(file, Messages.fileSaved + '\n');
                }else{
                    renderInterface(file, Messages.fileNotSaved + '\n');
                }
            });
        }else{
            // el archivo no existe y se tiene que crear
            file.saveas(name);
            renderInterface(file, Messages.fileSaved + '\n');
        }
    });
}
function save(file){
    // Si existe el archivo solo tenemos que guardarlo sino lo creamos.
    if(file.hasName()){
        file.save();
        renderInterface(file, Messages.fileSaved + '\n');
    }else{
        saveas(file);
    }
}