const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

const rutas_libros = require('./routes/libros.routes');

app.use('/registros', rutas_libros); 

app.use('*',(request, response, next) => {
    response.status(404).render('error404_message');
});

app.listen(3000);