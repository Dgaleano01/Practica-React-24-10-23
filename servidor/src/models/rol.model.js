import mongoose from 'mongoose';

const rolShema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    }
})

export default mongoose.Schema('Rol', rolShema);