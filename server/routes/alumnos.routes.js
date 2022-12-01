import {Router} from 'express';
import {obtenerAlumnos, nuevoAlumno, obtenerAlumno, actualizarAlumno, eliminarAlumno} from '../controllers/alumnos.controllers.js';

const router = Router()
    router.get('/alumnos', obtenerAlumnos);
    router.post('/alumno', nuevoAlumno);
    router.get('/alumno/:id', obtenerAlumno);
    router.put('/alumno/:id', actualizarAlumno);
    router.delete('/alumno/:id', eliminarAlumno);
export default router

