import Area from "../models/area.model";

export const getAreas = async (req, res) =>{
    const areas = await Area.find().populate('name');
    res.json(areas);
}

export const getArea = async ( req, res) =>{
    const area = await Area.findById(req.params.id).populates('name');
    if (!area) return res.status(404).json({message: 'Area not found'});
    res.json(area)
}

export const createArea= async (req, res) =>{
    const { name } = req.body;
    const newArea = Area({
        name
    })
    await newArea.save()
    res.status(201).json({message: 'Area created'})
}

export const deleteArea = async (req, res) =>{
    const findarea = await Area.findByIdAndDelete(req.params.id);
    if (!findarea) return res.status(404).json({message: 'Area not found'})
    res.sendStatus(204)
}