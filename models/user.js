const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class User {

    constructor(nuevo_nombre, nuevo_username, nueva_password, nueva_imagen) {
        this.nombre = nuevo_nombre;
        this.username = nuevo_username;
        this.password = nueva_password;
        this.imagen = nueva_imagen;
    }

    save() {
        console.log('holis');
        return bcrypt.hash(this.password, 12)
            .then((password_cifrado) => {
                console.log('holis2');
                console.log(password_cifrado.length);
                return db.execute('INSERT INTO USUARIO(nombre, username, password, imagen) VALUES(?,?,?,?)',
                    [this.nombre, this.username, password_cifrado, this.imagen]);
            }).catch((error) => {
                console.log(error);
            });
    }

    static findOne(username) {
        return db.execute('SELECT * FROM USUARIO WHERE username=?',
            [username]);
    }

    static login(username, password) {
        return true;
    }

}