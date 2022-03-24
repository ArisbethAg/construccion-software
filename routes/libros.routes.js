const express = require('express');
const path = require('path');
const router = express.Router();
const isAuth = require('../util/is-auth.js');

const librosController = require('../controllers/libros_controller');

router.use('/preguntas', isAuth, librosController.preguntas);

router.get('/modificarautor', isAuth, librosController.modificarautor);

router.post('/modificarautor', librosController.modificarautor_post);

router.get('/buscarlibro', isAuth, librosController.buscarlibro);

router.post('/buscarlibro', librosController.buscarlibro_post);

router.use('/recomendaciones', isAuth, librosController.recomendaciones);

router.use('/librosregistrados', isAuth, librosController.libros_registrados);

router.use('/autoresregistrados', isAuth, librosController.autores_registrados);

router.get('/libros', isAuth, librosController.get_libros);

router.post('/libros', librosController.post_libros);

router.get('/autores', isAuth, librosController.get_autores);

router.post('/autores', librosController.post_autores);

router.use('/', isAuth, librosController.menu);

router.all('*', librosController.error);

module.exports = router;
