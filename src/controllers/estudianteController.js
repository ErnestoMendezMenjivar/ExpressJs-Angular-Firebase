'use strict';

const firebase = require('../utils/db');
const Estudiante = require('../models/estudiante');
const firestore = firebase.firestore();



//funcion agregar usuario

const agregarEstudiante = async (req, res, next) => {

    try {
        const data = req.body;
        await firestore.collection('estudiantes').doc().set(data);
        res.json({message: 'Estudiante agregado con exito!!'});
    } catch (error) {
        res.status(400).send(error.message);
    }

}

//funcion obtener todos los estudiantes.
const ObtenerTodoEstudiantes = async (req, res, next) => {
    try {
        const estudiantes = await firestore.collection('estudiantes');
        const data = await estudiantes.get();
        const estudiantesArray = [];

        if (data.empty) {
            res.status(404).send('No se encontró registro de estudiante')
        } else {
            data.docs.forEach(doc => {
                const estudiante = new Estudiante(
                    doc.id,
                    doc.data().nombre,
                    doc.data().apellido,
                    doc.data().edad,
                    doc.data().telefono,
                    doc.data().encargado,
                    doc.data().semestre,
                    doc.data().anio,
                    doc.data().estado
                );
                estudiantesArray.push(estudiante);
            });

            res.send(estudiantesArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

    //funcion para obtener un estudiante en especifico
    const obtenerUnEstudiante = async (req, res, next) => {
        try {
            
            const id = req.params.id;
            const estudiante = await firestore.collection('estudiantes').doc(id);
            const data = await estudiante.get();
            if (!data.exists) {
                res.status(400).send('Estudiante con el ID dado no encontrado');
            }else{
                res.send(data.data());
            }

        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    //funcion para modificar estudiante por ID
    const editEstudiante = async (req, res, next) => {
        try {
            const id = req.params.id;
            const data = req.body;
            const estudiante = await firestore.collection('estudiantes').doc(id);
            await estudiante.update(data);

            res.json({message:"Estudiante modificado con exito"});

        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    //funcion para Eliminar estudiante por ID
    const EliminarEstudiante = async (req, res, next) => {
        try {
            const id = req.params.id;
            await firestore.collection('estudiantes').doc(id).delete();
            res.json({message:"Estudiante eliminado con exito !!"});

        } catch (error) {
            res.status(400).send(error.message);
        }
    }


module.exports = {
    agregarEstudiante,
    ObtenerTodoEstudiantes,
    obtenerUnEstudiante,
    editEstudiante,
    EliminarEstudiante
}