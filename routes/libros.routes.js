const express = require('express');
const path = require('path');
const router = express.Router();

const librosController = require('../controllers/libros_controller');

router.use('/preguntas', librosController.preguntas);

router.get('/modificarautor', librosController.modificarautor);

router.post('/modificarautor', librosController.modificarautor_post);

router.get('/buscarlibro', librosController.buscarlibro);

router.post('/buscarlibro', librosController.buscarlibro_post);

router.use('/recomendaciones', librosController.recomendaciones);

router.use('/librosregistrados', librosController.libros_registrados);

router.use('/autoresregistrados', librosController.autores_registrados);

router.get('/libros', librosController.get_libros);

router.post('/libros', librosController.post_libros);

router.get('/autores', librosController.get_autores);

router.post('/autores', librosController.post_autores);

router.use('/', librosController.menu);

router.all('*', librosController.error);

module.exports = router;
