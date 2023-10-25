import mongoose from 'mongoose';

const areaShema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    }
})

export default mongoose.model('Area', areaShema);