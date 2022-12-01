import { pool } from '../db.js';


export const nuevoTaller = async (req, res) => {
    try {
        const { nombre, sala, jornada, cantidadAlumnos } = req.body;
        const [result] = await pool.query( "INSERT INTO talleres (nombre, sala, jornada, cantidadAlumnos) VALUES (?, ?, ?, ?)", [nombre, sala, jornada, cantidadAlumnos]);
        res.json({ id: result.insertId, nombre, sala, jornada, cantidadAlumnos });
    } catch (error) {
        return res.status(500).json({message: error.message}); 
    }
}

export const obtenerTalleres = async (req, res) => { 
    try {
        const [result] = await pool.query("SELECT * FROM talleres")
        res.json(result);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export const obtenerTaller = async (req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM talleres WHERE id = ?", [
            req.params.id,
        ]);
    
        if (result.length === 0)
            return res.status(404).json({ message: "Taller no encontrado." });
    
        res.json(result[0]);
    } catch (error){
        return res.status(500).json({message: error.message});
    }
}

export const actualizarTaller = async (req, res) => {
    try {
        const result = await pool.query("UPDATE talleres SET ? WHERE id = ?", [ req.body, req.params.id, ]);
        res.json(result)
    } catch (error) {
        return res.status(500).json({message: error.message});         
    }
}

export const eliminarTaller = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM talleres WHERE id = ?", [
            req.params.id,
        ]);
    
        if (result.affectedRows === 0)
            return res.status(404).json({ message: "Taller no encontrado." })
    
        return res.sendStatus(204)        
    } catch (error) {
        return res.status(500).json({message: error.message});   
    }    
}

