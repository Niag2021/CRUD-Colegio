import { pool } from '../db.js';

export const obtenerAlumnos = async (req, res) => { 
    try {
        const [result] = await pool.query("SELECT * FROM alumnos")
        res.json(result);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export const obtenerAlumno = async (req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM alumnos WHERE id = ?", [
            req.params.id,
        ]);
    
        if (result.length === 0)
            return res.status(404).json({ message: "Alumno no encontrado." });
    
        res.json(result[0]);
    } catch (error){
        return res.status(500).json({message: error.message});
    }
}

export const nuevoAlumno = async (req, res) => {
    try {
        const { nombre1, apellido1, apellido2, edad } = req.body;
        const [result] = await pool.query( "INSERT INTO alumnos (nombre1, apellido1, apellido2, edad) VALUES (?, ?, ?, ?)", [nombre1, apellido1, apellido2, edad]);
        res.json({ id: result.insertId, nombre1, apellido1, apellido2, edad });
    } catch (error) {
        return res.status(500).json({message: error.message}); 
    }
}

export const actualizarAlumno = async (req, res) => {
    try {
        const result = await pool.query("UPDATE alumnos SET ? WHERE id = ?", [ req.body, req.params.id, ]);
        res.json(result)
    } catch (error) {
        return res.status(500).json({message: error.message});         
    }
}

export const eliminarAlumno = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM alumnos WHERE id = ?", [
            req.params.id,
        ]);
    
        if (result.affectedRows === 0)
            return res.status(404).json({ message: "Alumno no encontrado." })
    
        return res.sendStatus(204)        
    } catch (error) {
        return res.status(500).json({message: error.message});   
    }    
}
