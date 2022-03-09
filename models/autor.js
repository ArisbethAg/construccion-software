const array_autores = [];

module.exports = class Autor {

    constructor(nuevo_nombre) {
        this.nombre = nuevo_nombre;
    }

    save() {
        array_autores.push(this);
        console.log(array_autores);
    }
    
    static fetchAll() {
        //console.log(array_autores);
        return array_autores;
    }

}