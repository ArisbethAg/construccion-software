const path = require('path');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.signup = (request, response, next) => {
    response.render('signup', {
        username: request.session.username ? request.session.username : '',
        imagen: request.session.imagen ? request.session.imagen : '',
    });
};

exports.signup_post = (request, response, next) => {
    console.log(request.file);
    const user = new User(request.body.name, request.body.username, request.body.password_user, request.file.filename);
    user.save()
        .then(() => {
            response.redirect('/usuarios/login')
        })
        .catch(err => {
            console.log(err);
        });
};

exports.login = (request, response, next) => {
    response.render('user_login', {
        username: request.session.username ? request.session.username : '',
        imagen: request.session.imagen ? request.session.imagen : '',
    });
    //response.render('user_login');
};

exports.login_post = (request, response, next) => {

    User.findOne(request.body.username)
        .then(([rows, fielData]) => {

            if (rows.length < 1) {
                return response.redirect('/usuarios/login');
            }

            const user = new User(rows[0].nombre, rows[0].username, rows[0].password, rows[0].imagen);
            bcrypt.compare(request.body.password_user, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        request.session.isLoggedIn = true;
                        request.session.user = user;
                        request.session.username = user.nombre;
                        request.session.imagen = user.imagen;

                        return request.session.save(err => {
                            response.redirect('/registros');
                        });
                    }
                    response.redirect('/usuarios/login');
                }).catch(err => {
                    response.redirect('/registros/login');
                });
        }).catch((error) => {
            console.log(error)
        });

    /*if (User.login(request.body.username, request.body.password)) {
        request.session.username = request.body.username;
        response.redirect('/registros'); 
    } else {
        response.redirect('/usuarios'); 
    }*/
    //response.redirect('/registros');
};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/usuarios/login');
    });
};
