import { pool } from '../db.js';

export const obtenerProfesores = async (req, res) => { 
    try {
        const [result] = await pool.query("SELECT * FROM profesores")
        res.json(result);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export const obtenerProfesor = async (req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM profesores WHERE id = ?", [
            req.params.id,
        ]);
    
        if (result.length === 0)
            return res.status(404).json({ message: "Profesor no encontrado." });
    
        res.json(result[0]);
    } catch (error){
        return res.status(500).json({message: error.message});
    }
}

export const nuevoProfesor = async (req, res) => {
    try {
        const { nombre1, apellido1, apellido2, direccion, ciudad, edad } = req.body;
        const [result] = await pool.query( "INSERT INTO profesores (nombre1, apellido1, apellido2, direccion, ciudad, edad) VALUES (?, ?, ?, ?, ?, ?)", [nombre1, apellido1, apellido2, direccion, ciudad, edad]);
        res.json({ id: result.insertId, nombre1, apellido1, apellido2, direccion, ciudad, edad });
    } catch (error) {
        return res.status(500).json({message: error.message}); 
    }
}

export const actualizarProfesor = async (req, res) => {
    try {
        const result = await pool.query("UPDATE profesores SET ? WHERE id = ?", [ req.body, req.params.id, ]);
        res.json(result)
    } catch (error) {
        return res.status(500).json({message: error.message});         
    }
}

export const eliminarProfesor = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM profesores WHERE id = ?", [
            req.params.id,
        ]);
    
        if (result.affectedRows === 0)
            return res.status(404).json({ message: "Profesor no encontrado." })
    
        return res.sendStatus(204)        
    } catch (error) {
        return res.status(500).json({message: error.message});   
    }    
}
