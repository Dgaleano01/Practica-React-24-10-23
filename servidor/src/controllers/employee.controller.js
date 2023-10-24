import Employee from "../models/employee.model";

export const getEmployees = async ( req, res ) => {
    const employees = await Employee.find()
    res.json(employees)
}

export const getEmployee = async ( req, res ) => {
    const employee = await Employee.findById(req.params.id)
    if (!employee) return res.status(404).json({message: 'Employee not found'})
    res.json(employee)
}

export const createEmployee = async ( req, res ) => {
    const { name, email, sexo, area, boletin, description, rol } = req.body;
    const newEmployee = Employee.({
        name,
        email,
        sexo,
        area, 
        boletin,
        description,
        rol
    })
    await newEmployee.save()
    res.status(201).json({message: 'Employee created'})
}

export const updateEmployee = async (req, res) => {
    const findEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body);
    if (!findEmployee) return res.status(404).json({message: 'Employee not found'});
    res.status(200).json({message: 'Employee created'})
}