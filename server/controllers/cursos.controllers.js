import { pool } from '../db.js';

export const nuevoCurso = async (req, res) => {
    try {
        const { nombre, sala, jornada } = req.body;
        const [result] = await pool.query( "INSERT INTO cursos (nombre, sala, jornada) VALUES (?, ?, ?)", [nombre, sala, jornada]);
        res.json({ id: result.insertId, nombre, sala, jornada });
    } catch (error) {
        return res.status(500).json({message: error.message}); 
    }
}

export const obtenerCursos = async (req, res) => { 
    try {
        const [result] = await pool.query("SELECT * FROM cursos")
        res.json(result);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export const obtenerCurso = async (req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM cursos WHERE id = ?", [
            req.params.id,
        ]);
    
        if (result.length === 0)
            return res.status(404).json({ message: "Curso no encontrado." });
    
        res.json(result[0]);
    } catch (error){
        return res.status(500).json({message: error.message});
    }
}

export const actualizarCurso = async (req, res) => {
    try {
        const result = await pool.query("UPDATE cursos SET ? WHERE id = ?", [ req.body, req.params.id, ]);
        res.json(result)
    } catch (error) {
        return res.status(500).json({message: error.message});         
    }
}

export const eliminarCurso = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM cursos WHERE id = ?", [
            req.params.id,
        ]);
    
        if (result.affectedRows === 0)
            return res.status(404).json({ message: "Curso no encontrado." })
    
        return res.sendStatus(204)        
    } catch (error) {
        return res.status(500).json({message: error.message});   
    }    
}
