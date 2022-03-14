const User = require('../models/user');

exports.login  = (request, response, next) => {
    response.render('user_login',{
        username: request.session.username ? request.session.username : ''
    });
    //response.render('user_login');
};

exports.login_post  = (request, response, next) => {

    if (User.login(request.body.username, request.body.password)) {
        request.session.username = request.body.username;
        response.redirect('/registros'); 
    } else {
        response.redirect('/usuarios'); 
    }
    //response.redirect('/registros');
};

exports.logout  = (request, response, next) => {
    request.session.destroy(() => {
    response.redirect('/usuarios/login');
});
};
