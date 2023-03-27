

const express = require('express');

const {
    agregarEstudiante, 
    ObtenerTodoEstudiantes, 
    obtenerUnEstudiante, 
    editEstudiante,
    EliminarEstudiante
    } = require('../controllers/estudianteController');

const router = express.Router();

//ruta para agregar estudiante
router.post('/estudiante', agregarEstudiante);

//ruta para obtener todos los estudiantes
router.get('/estudiantes', ObtenerTodoEstudiantes);

//ruta para obtener estudiante por ID
router.get('/estudiante/:id', obtenerUnEstudiante);

//ruta para editar estudiante por ID
router.put('/estudiante/:id', editEstudiante);

//ruta para eliminar estudiante por ID
router.delete('/estudiante/:id',EliminarEstudiante);

module.exports = {
    routes: router
}