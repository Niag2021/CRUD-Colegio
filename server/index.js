import express from 'express';
import { PORT } from './config.js';
import indexRoutes from './routes/index.routes.js';
import alumnosRoutes from './routes/alumnos.routes.js';
import profesoresRoutes from './routes/profesores.routes.js'
import cursosRoutes from './routes/cursos.routes.js';
import talleresRoutes from './routes/talleres.routes.js';
import asignaturasRoutes from './routes/asignaturas.routes.js';

//guarda en una constante app lo que se importe de express
const app = express();

//para pasar las sentencias sql 
app.use(express.json());
app.use(indexRoutes);
app.use(alumnosRoutes);
app.use(profesoresRoutes);
app.use(cursosRoutes);
app.use(talleresRoutes);
app.use(asignaturasRoutes);

app.listen(PORT);
console.log(`Servidor ejecutado en puerto ${PORT}.`);
