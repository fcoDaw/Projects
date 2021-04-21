const fs = require('fs');
const path = require('path');

class Directory{

    constructor(){
        this._dir = 'docs';
        this._path = __dirname;
        this.createDocsDir();
    }

    // Crear la carpeta y comprobar si esta o no
    createDocsDir(){
        this._path = path.join(this._path, this._dir);

        if(!fs.existsSync(this._dir)){
            fs.mkdirSync(this._dir);
        }
    }

    // Nos devuelve la URL

    getPath(){
        return this._path;
    }

    // Una versión cortade la URL

    getShortPath(){
        const paths = path.parse(this._path);
        let delimiter = '/';

        if(paths.dir.indexOf(delimiter) < 0){
            delimiter = `\\`;
        }

        return `${paths.root}...${delimiter}${paths.name}`;
    }



    // Me devuelve los archivos que estan en la carpeta

    getFilesInDir(){
        const files = fs.readdirSync(this._path);
        let n = 0;

        console.log(`
====================================
Ubicación: ${this.getShortPath()}
====================================`);

        files.forEach(file => {
            if(file != '.DS_Store'){
                console.log(`   ${file}`);
                n++;
            }
        });
    }
}

module.exports = Directory;