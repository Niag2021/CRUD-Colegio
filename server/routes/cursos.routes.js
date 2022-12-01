import {Router} from 'express';
import {obtenerCursos, nuevoCurso, obtenerCurso, actualizarCurso, eliminarCurso} from '../controllers/cursos.controllers.js';

const router = Router()
    router.get('/cursos', obtenerCursos);
    router.post('/curso', nuevoCurso);
    router.get('/curso/:id', obtenerCurso);
    router.put('/curso/:id', actualizarCurso);
    router.delete('/curso/:id', eliminarCurso);
export default router

