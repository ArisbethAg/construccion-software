const array_users = [];

module.exports = class User {

    constructor(nuevo_username, nueva_password) {
        this.username = nuevo_username;
        this.password = nueva_password;
    }

    save() {
        array_users.push(this);
    }

    static login(username, password) {
        return true;
    }

}