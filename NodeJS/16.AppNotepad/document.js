const fs = require('fs');
const os = require('os');


class document {

    constructor(dir) {
        this._content = '';
        this._isSaved = false;
        this._filename = '';
        this._dir = dir;
    }

    // Validar si existe el archivo.
    exists(name){
        return fs.existsSync(`${this._dir}/${name}`);
    }

  // Añadir texto aun archivo ya creado
  
  append(text){
      this._content += os.EOL + text;
      this._isSaved = false;
  }

  // Nos permite guardar un archivo con un nuevo nombre.

  saveas(name){
      fs.writeFileSync(`${this._dir}/${name}`, this._content);

      this._isSaved = true;
      this._filename = name;
  }

 //Nos pemite guardar el archivo con su mismo nombre
  save() {
    fs.writeFileSync(`${this._dir}/${this._filename}`, this._content);
    this._isSaved = true;
    this._filename = this._filename;
  }

  getContent(){
      return this._content;
  }

  // Para saber si el archivo tiene un nombre
  hasName(){
    if(this._filename != ''){
        return true;
    }else{
        return false;
    }
  }

  getName() {
      return this._filename;
  }

  isSaved() {
      return this._isSaved;
  }

  open(name) {
    this._content = fs.readFileSync(`${this._dir}/${name}`,'utf-8');
    this._filename = name;
    this._isSaved = true;
    return this._content;
  }

}


module.exports = document;