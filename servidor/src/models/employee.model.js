import mongoose from 'mongoose';

const employeeShema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    sexo:{
        type:String,
        require:true,
    },
    area:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Area',
    },
    boletin:{
        type:Number,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    rol:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Rol'
    }
})

export default mongoose.model('employee', employeeShema);