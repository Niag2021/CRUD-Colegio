import {Router} from 'express';
import { obtenerTalleres, nuevoTaller, obtenerTaller, actualizarTaller, eliminarTaller } from '../controllers/talleres.controllers.js';

const router = Router()
    router.get('/talleres', obtenerTalleres);
    router.post('/taller', nuevoTaller);
    router.get('/taller/:id', obtenerTaller);
    router.put('/taller/:id', actualizarTaller);
    router.delete('/taller/:id', eliminarTaller);
export default router

