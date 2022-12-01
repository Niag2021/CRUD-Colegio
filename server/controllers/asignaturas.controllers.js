import { pool } from '../db.js';

export const nuevoAsignatura = async (req, res) => {
    try {
        const { nombre, profesor, cantidadAlumnos } = req.body;
        const [result] = await pool.query( "INSERT INTO asignaturas (nombre, profesor, cantidadAlumnos) VALUES (?, ?, ?)", [nombre, profesor, cantidadAlumnos]);
        res.json({ id: result.insertId, nombre, profesor, cantidadAlumnos });
    } catch (error) {
        return res.status(500).json({message: error.message}); 
    }
}

export const obtenerAsignaturas = async (req, res) => { 
    try {
        const [result] = await pool.query("SELECT * FROM asignaturas")
        res.json(result);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export const obtenerAsignatura = async (req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM asignaturas WHERE id = ?", [
            req.params.id,
        ]);
    
        if (result.length === 0)
            return res.status(404).json({ message: "Asignatura no encontrado." });
    
        res.json(result[0]);
    } catch (error){
        return res.status(500).json({message: error.message});
    }
}

export const actualizarAsignatura = async (req, res) => {
    try {
        const result = await pool.query("UPDATE asignaturas SET ? WHERE id = ?", [ req.body, req.params.id, ]);
        res.json(result)
    } catch (error) {
        return res.status(500).json({message: error.message});         
    }
}

export const eliminarAsignatura = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM asignaturas WHERE id = ?", [
            req.params.id,
        ]);
    
        if (result.affectedRows === 0)
            return res.status(404).json({ message: "Asignatura no encontrado." })
    
        return res.sendStatus(204)        
    } catch (error) {
        return res.status(500).json({message: error.message});   
    }    
}
