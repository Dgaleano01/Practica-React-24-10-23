import Rol from "../models/rol.model.js";

export const getRols = async (req, res) => {
 const rols = await Rol.find();
 res.json(rols)
} 

export const getRol = async (req, res) => {
    const rol = await Rol.findById(req.params.id);
    if (!rol) return res.status(404).json({message: 'Rol not found'});
    res.json(rol);
}

export const createRol = async (req, res) => {
    const { name } = req.body;
    const newRol = Rol({
        name
    });
    await newRol.save();
    res.status(201).json({message: 'Rol created'})
}

export const deleteRol = async (req, res) => {
    const findrol = await Rol.findByIdAndDelete(req.params.id)
    if (!findrol) return res.status(404).json({message: 'Rol not found'})
    res.sendStatus(204)
}
