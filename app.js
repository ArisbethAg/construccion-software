const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const csrf = require('csurf');
const csrfProtection = csrf();
const rutas_libros = require('./routes/libros.routes');
const rutas_users = require('./routes/user.routes');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieParser());

app.use(session({
    secret: 'abcdefghijklmnopqrstuvwxyz', 
    resave: false,
    saveUninitialized: false,
}));

app.use(csrfProtection); 

app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});

app.use('/registros', rutas_libros); 
app.use('/usuarios', rutas_users);

app.use('*',(request, response, next) => {
    response.status(404).render('error404_message');
});

app.listen(3000);