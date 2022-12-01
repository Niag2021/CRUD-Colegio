import {Router} from 'express';
import { obtenerAsignaturas, nuevoAsignatura, obtenerAsignatura, actualizarAsignatura, eliminarAsignatura } from '../controllers/asignaturas.controllers.js';

const router = Router()
    router.get('/asignaturas', obtenerAsignaturas);
    router.post('/asignatura', nuevoAsignatura);
    router.get('/asignatura/:id', obtenerAsignatura);
    router.put('/asignatura/:id', actualizarAsignatura);
    router.delete('/asignatura/:id', eliminarAsignatura);
export default router

