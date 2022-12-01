import {Router} from 'express';
import {obtenerProfesores, nuevoProfesor, obtenerProfesor, actualizarProfesor, eliminarProfesor} from '../controllers/profesores.controllers.js';

const router = Router()
    router.get('/profesores', obtenerProfesores); 
    router.post('/profesor', nuevoProfesor); 
    router.get('/profesor/:id', obtenerProfesor);
    router.put('/profesor/:id', actualizarProfesor);
    router.delete('/profesor/:id', eliminarProfesor);
export default router

