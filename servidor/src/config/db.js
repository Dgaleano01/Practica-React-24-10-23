import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({path: './variables.env'});

const MONGO_URL = process.env.DB_URL;

const ConnectDB = async ()=>{
    try {
        await mongoose.connect(MONGO_URL);
        console.log("DB Connected");
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default ConnectDB;